import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Input from '../Common/Input';
import Textarea from '../Common/Textarea';
import Button from '../Common/Button';
import './InquiryForm.css';

const InquiryForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="inquiry-form__success" role="status">
        <h3>Thank you — your message has been received.</h3>
        <p>A member of our team will get back to you as soon as possible.</p>
        <Button variant="secondary" onClick={() => setSubmitted(false)} showIcon={false}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="inquiry-form__row">
        <Input
          id="fullName"
          label="Full Name"
          placeholder="Enter your full name"
          error={errors.fullName}
          register={register('fullName', { required: 'Full Name is required' })}
        />
        <Input
          id="emailAddress"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          error={errors.emailAddress}
          register={register('emailAddress', {
            required: 'Email Address is required',
            pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
          })}
        />
      </div>

      <div className="inquiry-form__row">
        <Input
          id="phoneNumber"
          label="Phone Number"
          type="tel"
          placeholder="Enter your phone number"
          error={errors.phoneNumber}
          register={register('phoneNumber', { required: 'Phone Number is required' })}
        />
        <Input
          id="organization"
          label="Organization (Optional)"
          placeholder="Hospital / Institution"
          error={errors.organization}
          register={register('organization')}
        />
      </div>

      <Textarea
        id="message"
        label="Message"
        placeholder="How can we help you?"
        error={errors.message}
        register={register('message', { required: 'Message is required' })}
      />

      <Button type="submit" variant="primary" showIcon={false} disabled={isSubmitting}>
        {isSubmitting ? 'Submitting…' : 'Submit'}
      </Button>
    </form>
  );
};

export default InquiryForm;
