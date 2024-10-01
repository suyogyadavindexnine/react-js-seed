import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "src/shared/components/button/Button";
import { useDispatch } from "react-redux";
import * as ROUTES from "../shared/constants/routes";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router";
import { useAuth } from "src/providers/AuthguardContext";

interface OTPWithLoginProps {
  resendOtp?: (e) => void;
}

const OTPWithLogin = ({ resendOtp }: OTPWithLoginProps) => {
  //const
  const { t } = useTranslation(["english"]);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const { login } = useAuth();

  //redux
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  //state variables
  const [otp, setOtp] = useState("");
  const [showError, setShowError] = useState<boolean>(false);

  //Effects
  useEffect(() => {
    if (otp.length >= 6) {
      setShowError(false);
    }
  }, [otp]);

  useEffect(() => {
    if (isButtonDisabled) {
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 14000);
    }
  }, [isButtonDisabled]);

  //methods
  const verfiyOtp = async () => {
    if (window.location.pathname === ROUTES.ADMIN_LOGIN) {
      navigate(`${ROUTES.DASHBOARD}`);
    } else {
      navigate(`${ROUTES.DASHBOARD}`);
    }
    localStorage.setItem("accessToken", "tokendasdasda#aasdas131233");
    localStorage.setItem("userRoles", JSON.stringify([]));

    login("tokendasdasda#aasdas131233");
    localStorage.setItem("logged", JSON.stringify(true));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // verfiyOtp();
    }
  };

  return (
    <Box className="loginWithOtp">
      <Box className="text-h4 welcomeText font-weight-semibold" sx={{ mb: 2 }}>
        {t("login.verificationText")}
      </Box>
      <Box
        className="text-medium font-weight-regular verificationSubText"
        sx={{ mb: 3 }}
      >
        {t("login.verificationSubText")}
      </Box>
      <Box className="OtpInputs" sx={{ mb: 3 }}>
        <Box className="otpLbl">{"OTP"}</Box>
        <Box className="flex-basic-space-between mt-10">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputType={"number"}
            renderInput={(props) => (
              <input {...props} onKeyDown={(e) => handleKeyDown(e)} />
            )}
          />
        </Box>

        {showError && (
          <Box className="otpErrorMsg mt-5">{t("enterCorrectOtp")}</Box>
        )}
      </Box>
      <Button
        btnText={t("login.VerifyAndLoginBtnText")}
        sx={{ mt: 2 }}
        disabled={otp.length < 6}
        className="w-100"
        variant={"contained"}
        onClick={verfiyOtp}
      />
      <Box
        className="text-medium font-weight-regular receivedOTP text-center"
        sx={{ my: 4 }}
      >
        {t("login.dontReceiveOpt")}
        <a
          // onClick={resendOtpOnEmail}
          className={`${isButtonDisabled ? "disabled" : ""}`}
        >
          {t("login.resendOpt")}
        </a>
      </Box>
    </Box>
  );
};

export default OTPWithLogin;
