"use client";

import { useState, useEffect } from "react";
import {
  X,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Sparkles,
  ArrowRight,
  Check,
  Loader2,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

type AuthView = "signin" | "signup" | "forgot";

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  initialView?: AuthView;
};

// ─── Validation helpers ────────────────────────────────────────

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ─── Input component ───────────────────────────────────────────

function AuthInput({
  icon: Icon,
  type: initialType,
  placeholder,
  value,
  onChange,
  error,
}: {
  icon: typeof Mail;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = initialType === "password";
  const type = isPassword && showPassword ? "text" : initialType;

  return (
    <div>
      <div
        className={`relative flex items-center rounded-2xl border-2 bg-white transition-all duration-300 ${
          error
            ? "border-red-400"
            : "border-[#29152F]/8 focus-within:border-[#F6327B] focus-within:shadow-[0_0_0_4px_rgba(246,50,123,0.08)]"
        }`}
      >
        <Icon
          size={17}
          className="ml-4 shrink-0 text-[#9A8E9D]"
        />
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-12 flex-1 bg-transparent px-3 text-sm font-medium text-[#29152F] outline-none placeholder:text-[#9A8E9D]"
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#9A8E9D] transition-colors hover:bg-[#FFE1EC] hover:text-[#F6327B]"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>
      {error && (
        <p className="mt-1.5 ml-4 text-[11px] font-medium text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Sign In View ──────────────────────────────────────────────

function SignInView({
  onSwitch,
  onClose,
}: {
  onSwitch: (view: AuthView) => void;
  onClose: () => void;
}) {
  const { signIn, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [shakeError, setShakeError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!validateEmail(email)) newErrors.email = "Invalid email address";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setShakeError(true);
      setTimeout(() => setShakeError(false), 500);
      return;
    }

    setErrors({});
    const success = await signIn(email, password);
    if (success) {
      onClose();
      setEmail("");
      setPassword("");
    } else {
      setErrors({ email: "Invalid credentials" });
      setShakeError(true);
      setTimeout(() => setShakeError(false), 500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="mb-2">
        <div className="mb-4 flex items-center gap-2 text-[10px] font-bold tracking-[2.5px] text-[#F6327B]">
          <Sparkles size={14} />
          WELCOME BACK ✦
        </div>
        <h2 className="text-[36px] font-black leading-[0.9] tracking-[-2px] text-[#29152F] sm:text-[42px]">
          GOOD TO SEE{" "}
          <span className="font-serif italic text-[#F6327B]">YOU.</span>
        </h2>
        <p className="mt-3 max-w-[360px] text-[13px] leading-6 text-[#66576A]">
          Sign in to save your favourites, track orders and discover your next
          hair obsession.
        </p>
      </div>

      <div className={`space-y-3.5 ${shakeError ? "animate-[shake_0.4s_ease-in-out]" : ""}`}>
        <AuthInput
          icon={Mail}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(v) => {
            setEmail(v);
            if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
          }}
          error={errors.email}
        />
        <AuthInput
          icon={Lock}
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(v) => {
            setPassword(v);
            if (errors.password)
              setErrors((p) => ({ ...p, password: undefined }));
          }}
          error={errors.password}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => onSwitch("forgot")}
          className="text-[11px] font-semibold text-[#F6327B] transition-colors hover:text-[#E92870]"
        >
          Forgot password?
        </button>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="group flex h-13 w-full items-center justify-center gap-2.5 rounded-full bg-[#F6327B] text-sm font-bold tracking-[1px] text-white shadow-[0_15px_35px_rgba(246,50,123,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E92870] hover:shadow-[0_20px_40px_rgba(246,50,123,0.35)] disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {isLoading ? (
          <Loader2 size={20} className="animate-spin" />
        ) : (
          <>
            SIGN IN
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </>
        )}
      </button>

      {/* Divider */}
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-[#29152F]/8" />
        <span className="text-[9px] font-bold tracking-[1.5px] text-[#9A8E9D]">
          OR CONTINUE WITH
        </span>
        <div className="h-px flex-1 bg-[#29152F]/8" />
      </div>

      {/* Google button */}
      <button
        type="button"
        className="flex h-13 w-full items-center justify-center gap-3 rounded-full border-2 border-[#29152F]/8 bg-white text-sm font-bold text-[#29152F] transition-all duration-300 hover:border-[#29152F]/20 hover:bg-[#FFF9F3]"
      >
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        Continue with Google
      </button>

      {/* Switch to sign up */}
      <div className="text-center">
        <p className="text-[11px] font-bold tracking-[1px] text-[#9A8E9D]">
          NEW TO HAIRDAZE?
        </p>
        <button
          type="button"
          onClick={() => onSwitch("signup")}
          className="mt-2 text-[13px] font-bold text-[#F6327B] transition-colors hover:text-[#E92870]"
        >
          Create an account →
        </button>
      </div>
    </form>
  );
}

// ─── Create Account View ───────────────────────────────────────

function SignUpView({
  onSwitch,
  onClose,
}: {
  onSwitch: (view: AuthView) => void;
  onClose: () => void;
}) {
  const { signUp, isLoading } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<
    Record<string, string>
  >({});
  const [shakeError, setShakeError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    else if (!validateEmail(email)) newErrors.email = "Invalid email address";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!agreed) newErrors.agreed = "You must agree to the terms";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setShakeError(true);
      setTimeout(() => setShakeError(false), 500);
      return;
    }

    setErrors({});
    const success = await signUp(name, email, password);
    if (success) {
      onClose();
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAgreed(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-2">
        <div className="mb-4 flex items-center gap-2 text-[10px] font-bold tracking-[2.5px] text-[#F6327B]">
          <Sparkles size={14} />
          JOIN THE DAZE ✦
        </div>
        <h2 className="text-[34px] font-black leading-[0.9] tracking-[-2px] text-[#29152F] sm:text-[40px]">
          CREATE YOUR{" "}
          <span className="font-serif italic text-[#F6327B]">ACCOUNT</span>
        </h2>
      </div>

      <div className={`space-y-3 ${shakeError ? "animate-[shake_0.4s_ease-in-out]" : ""}`}>
        <AuthInput
          icon={User}
          placeholder="Full Name"
          value={name}
          onChange={(v) => {
            setName(v);
            if (errors.name) setErrors((p) => ({ ...p, name: "" }));
          }}
          error={errors.name}
        />
        <AuthInput
          icon={Mail}
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(v) => {
            setEmail(v);
            if (errors.email) setErrors((p) => ({ ...p, email: "" }));
          }}
          error={errors.email}
        />
        <AuthInput
          icon={Lock}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(v) => {
            setPassword(v);
            if (errors.password) setErrors((p) => ({ ...p, password: "" }));
          }}
          error={errors.password}
        />
        <AuthInput
          icon={Lock}
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(v) => {
            setConfirmPassword(v);
            if (errors.confirmPassword)
              setErrors((p) => ({ ...p, confirmPassword: "" }));
          }}
          error={errors.confirmPassword}
        />
      </div>

      {/* Checkbox */}
      <label className="flex cursor-pointer items-start gap-3">
        <div className="relative mt-0.5">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => {
              setAgreed(e.target.checked);
              if (errors.agreed) setErrors((p) => ({ ...p, agreed: "" }));
            }}
            className="peer sr-only"
          />
          <div className="flex h-5 w-5 items-center justify-center rounded-md border-2 border-[#29152F]/15 transition-all duration-200 peer-checked:border-[#F6327B] peer-checked:bg-[#F6327B]">
            {agreed && <Check size={12} className="text-white" />}
          </div>
        </div>
        <span className="text-[12px] leading-5 text-[#66576A]">
          I agree to the{" "}
          <a href="#" className="font-semibold text-[#F6327B] hover:underline">
            Terms
          </a>{" "}
          &{" "}
          <a href="#" className="font-semibold text-[#F6327B] hover:underline">
            Privacy Policy
          </a>
        </span>
      </label>
      {errors.agreed && (
        <p className="-mt-2 ml-8 text-[11px] font-medium text-red-500">
          {errors.agreed}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="group flex h-13 w-full items-center justify-center gap-2.5 rounded-full bg-[#F6327B] text-sm font-bold tracking-[1px] text-white shadow-[0_15px_35px_rgba(246,50,123,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E92870] hover:shadow-[0_20px_40px_rgba(246,50,123,0.35)] disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {isLoading ? (
          <Loader2 size={20} className="animate-spin" />
        ) : (
          <>
            CREATE ACCOUNT
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </>
        )}
      </button>

      <div className="text-center">
        <p className="text-[12px] text-[#66576A]">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => onSwitch("signin")}
            className="font-bold text-[#F6327B] transition-colors hover:text-[#E92870]"
          >
            Sign in →
          </button>
        </p>
      </div>
    </form>
  );
}

// ─── Forgot Password View ──────────────────────────────────────

function ForgotPasswordView({
  onSwitch,
}: {
  onSwitch: (view: AuthView) => void;
}) {
  const { sendResetLink, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }
    setError("");
    const success = await sendResetLink(email);
    if (success) setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center py-8 text-center">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#D7F7EE]">
          <Mail size={30} className="text-[#249D85]" />
        </div>
        <h3 className="text-xl font-bold text-[#29152F]">Check your inbox ✦</h3>
        <p className="mt-2 max-w-[280px] text-sm text-[#66576A]">
          We&apos;ve sent a password reset link to{" "}
          <span className="font-semibold text-[#29152F]">{email}</span>
        </p>
        <button
          onClick={() => onSwitch("signin")}
          className="mt-6 rounded-full border-2 border-[#29152F]/10 px-6 py-3 text-[11px] font-bold tracking-[1px] text-[#29152F] transition-all duration-300 hover:border-[#F6327B] hover:bg-[#FFE0EB] hover:text-[#F6327B]"
        >
          BACK TO SIGN IN
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="mb-2">
        <div className="mb-4 flex items-center gap-2 text-[10px] font-bold tracking-[2.5px] text-[#F6327B]">
          <Sparkles size={14} />
          RESET PASSWORD
        </div>
        <h2 className="text-[34px] font-black leading-[0.9] tracking-[-2px] text-[#29152F] sm:text-[40px]">
          FORGOT YOUR{" "}
          <span className="font-serif italic text-[#F6327B]">PASSWORD?</span>
        </h2>
        <p className="mt-3 max-w-[340px] text-[13px] leading-6 text-[#66576A]">
          Enter your email and we&apos;ll send you a link to reset your
          password.
        </p>
      </div>

      <AuthInput
        icon={Mail}
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(v) => {
          setEmail(v);
          if (error) setError("");
        }}
        error={error}
      />

      <button
        type="submit"
        disabled={isLoading}
        className="group flex h-13 w-full items-center justify-center gap-2.5 rounded-full bg-[#F6327B] text-sm font-bold tracking-[1px] text-white shadow-[0_15px_35px_rgba(246,50,123,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E92870] hover:shadow-[0_20px_40px_rgba(246,50,123,0.35)] disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {isLoading ? (
          <Loader2 size={20} className="animate-spin" />
        ) : (
          <>
            SEND RESET LINK
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </>
        )}
      </button>

      <div className="text-center">
        <button
          type="button"
          onClick={() => onSwitch("signin")}
          className="text-[12px] font-bold text-[#66576A] transition-colors hover:text-[#F6327B]"
        >
          ← Back to Sign In
        </button>
      </div>
    </form>
  );
}

// ─── Main AuthModal ────────────────────────────────────────────

export function AuthModal({
  isOpen,
  onClose,
  initialView = "signin",
}: AuthModalProps) {
  const [view, setView] = useState<AuthView>(initialView);
  const { isAuthenticated } = useAuth();

  // Reset view when opening
  useEffect(() => {
    if (isOpen) setView(initialView);
  }, [isOpen, initialView]);

  // Close on escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Don't render if authenticated
  if (isAuthenticated) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[95] bg-[#29152F]/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`fixed left-1/2 top-1/2 z-[96] w-[92vw] max-w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-[24px] border border-[#29152F]/5 bg-[#FFF9F3] shadow-[0_40px_100px_rgba(42,17,47,0.25)] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-[#29152F]/50 transition-all duration-200 hover:bg-[#FFE1EC] hover:text-[#F6327B]"
        >
          <X size={18} />
        </button>

        {/* Decorative sparkle */}
        <Sparkles
          className="sparkle-animation absolute left-5 top-5 text-[#F6327B]/20"
          size={24}
        />

        {/* Content */}
        <div className="p-7 sm:p-8">
          {view === "signin" && (
            <SignInView onSwitch={setView} onClose={onClose} />
          )}
          {view === "signup" && (
            <SignUpView onSwitch={setView} onClose={onClose} />
          )}
          {view === "forgot" && <ForgotPasswordView onSwitch={setView} />}
        </div>
      </div>
    </>
  );
}
