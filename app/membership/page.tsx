'use client';

import { useState } from 'react';
import { User, Briefcase, BookOpen, TrendingUp } from 'lucide-react';
import { Footer } from '@/components/Footer';

// Define the BankClinic form data type matching the schema request
type BankClinicFormData = {
  name: string;
  email: string;
  cellNumber: string;
  bankName: string;
  branch: string;
  branchCode: string;
  issueDescription: string;
};

const initialForm: BankClinicFormData = {
  name: '',
  email: '',
  cellNumber: '',
  bankName: '',
  branch: '',
  branchCode: '',
  issueDescription: '',
};

export default function MembershipPage() {
  const [form, setForm] = useState<BankClinicFormData>(initialForm);
  const [errors, setErrors] = useState<{ [K in keyof BankClinicFormData]?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [apiSuccess, setApiSuccess] = useState('');

  // Handle generalized input mapping
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const target = e.target;
    const name = target.name;
    let value = target.value;

    if (name === 'cellNumber') {
      value = value.replace(/\D/g, '').slice(0, 10);
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setApiError('');
    setApiSuccess('');
  }

  function validate(form: BankClinicFormData) {
    const newErrors: { [K in keyof BankClinicFormData]?: string } = {};

    // Name should not accept numbers or special characters (only alphabets and spaces)
    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!/^[A-Za-z\s]+$/.test(form.name)) {
      newErrors.name = 'Name must only contain alphabets and spaces';
    }

    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!form.cellNumber.trim()) {
      newErrors.cellNumber = 'Cell Number is required';
    } else if (!/^\d{10}$/.test(form.cellNumber)) {
      newErrors.cellNumber = 'Cell Number must be exactly 10 digits';
    }

    if (!form.bankName.trim()) newErrors.bankName = 'Bank Name is required';
    if (!form.branch.trim()) newErrors.branch = 'Branch is required';
    if (!form.branchCode.trim()) newErrors.branchCode = 'Branch Code is required';
    if (!form.issueDescription.trim()) newErrors.issueDescription = 'Issue Description is required';

    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setApiError('');
    setApiSuccess('');
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setLoading(true);
      try {
        const res = await fetch('/api/membership', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        if (res.ok) {
          setApiSuccess('Issue submitted successfully!');
          setSubmitted(true);
          setForm(initialForm);
        } else {
          setApiError(data.error || 'Submission failed');
        }
      } catch {
        setApiError('Network error');
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <>
      <div className="bg-gray-50 min-h-screen w-full">
        {/* HERO SECTION */}
        <section className="w-full bg-[#0a1a3a] py-12 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Bank Clinic Support
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
            Report your banking-related issues to our expert panel for resolution.
          </p>
        </section>

        {/* BENEFITS SECTION */}
        <section className="max-w-5xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-4 gap-6">
            <BenefitCard
              icon={<BookOpen className="w-8 h-8 text-blue-700" />}
              title="Expert Review"
              desc="Your issue will be reviewed by banking experts."
            />
            <BenefitCard
              icon={<User className="w-8 h-8 text-blue-700" />}
              title="Dedicated Support"
              desc="Receive personalized support for your grievances."
            />
            <BenefitCard
              icon={<Briefcase className="w-8 h-8 text-blue-700" />}
              title="Rapid Conflict Resolution"
              desc="We work closely with institutions for swift closures."
            />
            <BenefitCard
              icon={<TrendingUp className="w-8 h-8 text-blue-700" />}
              title="Empowerment"
              desc="We advocate for fair and transparent banking rights."
            />
          </div>
        </section>

        {/* FORM SECTION */}
        <section className="max-w-5xl mx-auto px-4 pb-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2 text-center">
                Bank Clinic Issue Form
              </h2>
              <p className="text-center text-gray-600 mb-6">
                Please provide detailed information regarding the issue you face with your bank.
              </p>
            </div>
            {submitted && apiSuccess ? (
              <div className="rounded-md bg-green-50 p-6 text-center text-green-800 shadow">
                {apiSuccess}
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    error={errors.name}
                  />
                  <InputField
                    label="Email ID"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                    error={errors.email}
                  />

                  <InputField
                    label="Cell Number"
                    name="cellNumber"
                    type="text"
                    value={form.cellNumber}
                    onChange={handleChange}
                    required
                    placeholder="Enter 10-digit mobile number"
                    error={errors.cellNumber}
                  />
                  <InputField
                    label="Bank to which issue relates"
                    name="bankName"
                    value={form.bankName}
                    onChange={handleChange}
                    required
                    placeholder="Enter bank name (e.g., SBI, HDFC)"
                    error={errors.bankName}
                  />
                  
                  <InputField
                    label="Branch"
                    name="branch"
                    value={form.branch}
                    onChange={handleChange}
                    required
                    placeholder="Enter branch name"
                    error={errors.branch}
                  />
                  <InputField
                    label="Branch Code"
                    name="branchCode"
                    value={form.branchCode}
                    onChange={handleChange}
                    required
                    placeholder="Enter branch code"
                    error={errors.branchCode}
                  />

                  <InputField
                    label="Issue Description"
                    name="issueDescription"
                    value={form.issueDescription}
                    onChange={handleChange}
                    textarea
                    required
                    placeholder="Describe your issue in detail..."
                    containerClass="md:col-span-2"
                    error={errors.issueDescription}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-8 w-full bg-[#0a1a3a] text-white py-3 rounded-lg font-semibold text-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit Issue'}
                </button>
                {apiError && (
                  <div className="mt-4 text-center text-red-600">{apiError}</div>
                )}
              </form>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

// Below are standard UI properties
type InputFieldProps = {
  label: string;
  name: keyof BankClinicFormData;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  error?: string;
  containerClass?: string;
  placeholder?: string;
};

function InputField({
  label,
  name,
  value,
  onChange,
  type = 'text',
  textarea,
  required,
  error,
  containerClass = '',
  placeholder,
}: InputFieldProps) {
  return (
    <div className={`flex flex-col ${containerClass} box-border max-w-full`}>
      <label htmlFor={name} className="mb-1 text-sm font-medium text-gray-800">
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full max-w-full box-border border rounded-lg px-3 py-2 text-base text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
          rows={5}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full max-w-full box-border border rounded-lg px-3 py-2 text-base text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
          autoComplete="off"
          required={required}
        />
      )}
      {error && <span className="mt-1 text-xs text-red-600">{error}</span>}
    </div>
  );
}

type BenefitCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

function BenefitCard({ icon, title, desc }: BenefitCardProps) {
  return (
    <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 h-full text-center border border-blue-100">
      <div className="mb-3">{icon}</div>
      <div className="font-semibold text-blue-900 mb-1">{title}</div>
      <div className="text-gray-600 text-sm">{desc}</div>
    </div>
  );
}

