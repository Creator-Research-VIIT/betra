'use client';

import { useState } from 'react';
import { User, Briefcase, BookOpen, TrendingUp } from 'lucide-react';
import { Footer } from '@/components/Footer';

type MembershipFormData = {
  name: string;
  addressOffice: string;
  addressResidence: string;
  telephoneOffice: string;
  telephoneResidence: string;
  cellNumber: string;
  email: string;
  dob: string;
  qualification: string;
  workingInBank: string;
  since: string;
  designation: string;
  remittance: string;
  ddNo: string;
  rtgsUtrNo: string;
  chequeNo: string;
  signature: string;
  date: string;
  place: string;
  declaration: boolean;
};

const initialForm: MembershipFormData = {
  name: '',
  addressOffice: '',
  addressResidence: '',
  telephoneOffice: '',
  telephoneResidence: '',
  cellNumber: '',
  email: '',
  dob: '',
  qualification: '',
  workingInBank: '',
  since: '',
  designation: '',
  remittance: '',
  ddNo: '',
  rtgsUtrNo: '',
  chequeNo: '',
  signature: '',
  date: '',
  place: '',
  declaration: false, //
};

export default function MembershipPage() {
  const [form, setForm] = useState<MembershipFormData>(initialForm);
  const [errors, setErrors] = useState<{ [K in keyof MembershipFormData]?: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [apiSuccess, setApiSuccess] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const target = e.target;
      const name = target.name;

      setForm((prev) => ({
        ...prev,
        [name]: target instanceof HTMLInputElement && target.type === 'checkbox'
          ? target.checked
          : target.value,
      }));

    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setApiError('');
    setApiSuccess('');
  }

  function validate(form: MembershipFormData) {
    const newErrors: { [K in keyof MembershipFormData]?: string } = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    if (
      !form.cellNumber.trim() &&
      !form.telephoneOffice.trim() &&
      !form.telephoneResidence.trim()
    ) {
      newErrors.cellNumber = 'At least one phone number is required';
    }

    if (!form.declaration) {
      newErrors.declaration = 'You must accept the declaration';
    }
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
          setApiSuccess('Membership submitted!');
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
      {/* <Header /> */}
      <div className="bg-gray-50 min-h-screen w-full">
        {/* HERO SECTION */}
        <section className="w-full bg-[#0a1a3a] py-12 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Become a Member of BETRA
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
            Join our network of banking professionals and institutions
          </p>
        </section>

        {/* BENEFITS SECTION */}
        <section className="max-w-5xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-4 gap-6">
            <BenefitCard
              icon={<BookOpen className="w-8 h-8 text-blue-700" />}
              title="Expert Training Programs"
              desc="Access industry-leading training and certification programs."
            />
            <BenefitCard
              icon={<User className="w-8 h-8 text-blue-700" />}
              title="Networking Opportunities"
              desc="Connect with peers, leaders, and institutions in banking."
            />
            <BenefitCard
              icon={<Briefcase className="w-8 h-8 text-blue-700" />}
              title="Research & Insights"
              desc="Stay updated with the latest research and financial insights."
            />
            <BenefitCard
              icon={<TrendingUp className="w-8 h-8 text-blue-700" />}
              title="Career Growth Support"
              desc="Enhance your career with exclusive resources and support."
            />
          </div>
        </section>

        {/* FORM SECTION */}
        <section className="max-w-5xl mx-auto px-4 pb-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2 text-center">
                Membership Application Form
              </h2>
              <p className="text-center text-gray-600 mb-6">
                Fill out the form below to apply for membership at BETRA.
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
                    error={errors.name}
                  />
                  <InputField
                    label="Email ID"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    error={errors.email}
                  />

                  <InputField
                    label="Cell Number"
                    name="cellNumber"
                    value={form.cellNumber}
                    onChange={handleChange}
                    error={errors.cellNumber}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      label="Telephone (Office)"
                      name="telephoneOffice"
                      value={form.telephoneOffice}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Telephone (Residence)"
                      name="telephoneResidence"
                      value={form.telephoneResidence}
                      onChange={handleChange}
                    />
                  </div>

                  <InputField
                    label="Date of Birth"
                    name="dob"
                    type="date"
                    value={form.dob}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Educational Qualification"
                    name="qualification"
                    value={form.qualification}
                    onChange={handleChange}
                  />

                  <InputField
                    label="Working in Bank"
                    name="workingInBank"
                    value={form.workingInBank}
                    onChange={handleChange}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      label="Since"
                      name="since"
                      value={form.since}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Designation"
                      name="designation"
                      value={form.designation}
                      onChange={handleChange}
                    />
                  </div>

                  <InputField
                    label="Remittance in Rupees"
                    name="remittance"
                    value={form.remittance}
                    onChange={handleChange}
                  />
                  <InputField
                    label="DD No."
                    name="ddNo"
                    value={form.ddNo}
                    onChange={handleChange}
                  />
                  <InputField
                    label="RTGS / NEFT UTR No."
                    name="rtgsUtrNo"
                    value={form.rtgsUtrNo}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Cheque No."
                    name="chequeNo"
                    value={form.chequeNo}
                    onChange={handleChange}
                  />

                  <InputField
                    label="Address (Office)"
                    name="addressOffice"
                    value={form.addressOffice}
                    onChange={handleChange}
                    textarea
                    containerClass="md:col-span-2"
                  />
                  <InputField
                    label="Address (Residence)"
                    name="addressResidence"
                    value={form.addressResidence}
                    onChange={handleChange}
                    textarea
                    containerClass="md:col-span-2"
                  />

                  <div className="md:col-span-2 flex items-start gap-3 mt-4">
                    <input
                      type="checkbox"
                      id="declaration"
                      name="declaration"
                      checked={form.declaration}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4"
                    />
                    <label htmlFor="declaration" className="text-sm text-gray-700">
                      I hereby declare that the information provided above is true and correct.
                    </label>
                  </div>

                  {errors.declaration && (
                    <div className="md:col-span-2 text-red-600 text-sm">
                      {errors.declaration}
                    </div>
                  )}

                  <InputField
                    label="Signature"
                    name="signature"
                    value={form.signature}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                  />
                  <InputField
                    label="Place"
                    name="place"
                    value={form.place}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-8 w-full bg-[#0a1a3a] text-white py-3 rounded-lg font-semibold text-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit'}
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

type InputFieldProps = {
  label: string;
  name: keyof MembershipFormData;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  error?: string;
  containerClass?: string;
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
          className={`w-full max-w-full box-border border rounded-lg px-3 py-2 text-base text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
          rows={3}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
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