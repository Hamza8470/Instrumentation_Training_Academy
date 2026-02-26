import { useState } from 'react'
import api from '../services/api'

const Verify = () => {
  const [certificateNumber, setCertificateNumber] = useState('')
  const [verificationState, setVerificationState] = useState({
    status: 'idle',
    message: '',
    certificate: null,
  })

  const handleVerify = async (event) => {
    event.preventDefault()
    const trimmed = certificateNumber.trim()
    if (!trimmed) {
      setVerificationState({ status: 'error', message: 'Please enter a certificate number.', certificate: null })
      return
    }

    setVerificationState({ status: 'loading', message: '', certificate: null })

    try {
      const response = await api.post('/certificates/verify', { certificateNumber: trimmed })
      setVerificationState({
        status: 'success',
        message: 'Certificate verified.',
        certificate: response.data.certificate,
      })
    } catch (error) {
      const message = error.response?.data?.message || 'Certificate not verified.'
      setVerificationState({ status: 'error', message, certificate: null })
    }
  }

  return (
    <div className="bg-sand">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber">Verify</p>
          <h1 className="font-display text-3xl text-ink">Verify a certificate issued by the institute.</h1>
          <p className="text-sm text-slate">
            Enter the certificate number to confirm authenticity and view the record details.
          </p>
          <div className="rounded-3xl border border-cloud bg-white p-5 shadow-card">
            <p className="text-xs uppercase tracking-[0.2em] text-slate">Sample Format</p>
            <p className="mt-2 font-display text-lg text-ink">ITA/xx/xx-xx/xxx</p>
            <p className="mt-2 text-xs text-slate">Use the exact certificate number printed on the certificate.</p>
          </div>
        </div>
        <form onSubmit={handleVerify} className="rounded-3xl border border-cloud bg-white p-6 shadow-card">
          <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
            Certificate Number
            <input
              className="mt-2 w-full rounded-2xl border border-cloud px-4 py-3 text-sm"
              type="text"
              placeholder="Enter certificate number"
              value={certificateNumber}
              onChange={(event) => setCertificateNumber(event.target.value)}
            />
          </label>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-mist transition hover:-translate-y-0.5"
            disabled={verificationState.status === 'loading'}
          >
            {verificationState.status === 'loading' ? 'Verifying...' : 'Verify Certificate'}
          </button>

          {verificationState.status !== 'idle' ? (
            <div className="mt-6 rounded-2xl border border-cloud bg-mist p-4 text-sm text-slate">
              <p className={verificationState.status === 'success' ? 'text-emerald-700' : 'text-rose-600'}>
                {verificationState.message}
              </p>
              {verificationState.certificate ? (
                <div className="mt-3 text-xs uppercase tracking-[0.2em] text-slate">
                  <p>student: {verificationState.certificate.studentName}</p>
                  <p>course: {verificationState.certificate.courseName}</p>
                  <p>issued: {new Date(verificationState.certificate.issueDate).toLocaleDateString()}</p>
                </div>
              ) : null}
            </div>
          ) : null}
        </form>
      </div>
    </div>
  )
}

export default Verify
