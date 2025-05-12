(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_c311a1fd._.js", {

"[project]/src/utils/formatTime.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "formatTime": (()=>formatTime)
});
const formatTime = (seconds)=>{
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/forms/form-components/VerificationCodeInput.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatTime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/formatTime.ts [app-client] (ecmascript)");
;
;
;
const VerificationCodeInput = ({ onResendCode, cooldown, onBack, onChange })=>{
    const handleCodeChange = (e)=>{
        const value = e.target.value;
        if (/^\d*$/.test(value)) {
            onChange(value);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4 mt-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row items-center border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden transition-all focus-within:border-blue-500 dark:focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-200 dark:focus-within:ring-blue-900",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: "w-full h-12 px-4 text-lg bg-transparent border-none focus:outline-none placeholder-gray-400 dark:placeholder-gray-500 text-center text-gray-800 dark:text-gray-100",
                    placeholder: "کد تأیید",
                    type: "text",
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    onChange: handleCodeChange,
                    maxLength: 6
                }, void 0, false, {
                    fileName: "[project]/src/components/forms/form-components/VerificationCodeInput.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/forms/form-components/VerificationCodeInput.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: cooldown <= 0 ? onResendCode : undefined,
                        disabled: cooldown > 0,
                        className: `text-sm flex items-center gap-1 ${cooldown > 0 ? 'text-gray-500 dark:text-gray-400' : 'text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300'} transition-colors`,
                        children: cooldown > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BiTimer"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/forms/form-components/VerificationCodeInput.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "ارسال مجدد کد (",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formatTime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTime"])(cooldown),
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/forms/form-components/VerificationCodeInput.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "ارسال مجدد کد"
                        }, void 0, false, {
                            fileName: "[project]/src/components/forms/form-components/VerificationCodeInput.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/form-components/VerificationCodeInput.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onBack,
                        className: "text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors",
                        children: "بازگشت"
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/form-components/VerificationCodeInput.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/forms/form-components/VerificationCodeInput.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/forms/form-components/VerificationCodeInput.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
};
_c = VerificationCodeInput;
const __TURBOPACK__default__export__ = VerificationCodeInput;
var _c;
__turbopack_context__.k.register(_c, "VerificationCodeInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/api/constants.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// export const BASE_URL = "http://188.34.162.79:8789";
__turbopack_context__.s({
    "API_ENDPOINTS": (()=>API_ENDPOINTS),
    "BASE_URL": (()=>BASE_URL)
});
const BASE_URL = "http://shahriar.thetechverse.ir";
const API_ENDPOINTS = {
    USERS: "/users/",
    REQUEST_OTP: "/request-otp/",
    VERIFY_OTP: "/verify-otp/",
    SESSIONS: "/chat/sessions/",
    SEND_MESSAGE: "/chat/sessions/"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/api/auth.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "requestOTP": (()=>requestOTP),
    "verifyOTP": (()=>verifyOTP)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/constants.ts [app-client] (ecmascript)");
;
;
const requestOTP = async (phone_number)=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"]}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].REQUEST_OTP}`, {
            phone_number
        });
    } catch (error) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
            const axiosError = error;
            // Throw a structured error
            throw {
                message: axiosError.response?.data?.message || axiosError.message,
                code: axiosError.response?.status?.toString() || '500',
                details: axiosError.response?.data?.details || undefined
            };
        }
        // For non-Axios errors
        throw {
            message: error instanceof Error ? error.message : 'خطای اتصال رخ داده است',
            code: '500'
        };
    }
};
const verifyOTP = async (data)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"]}${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_ENDPOINTS"].VERIFY_OTP}`, data);
        return response.data;
    } catch (error) {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
            const axiosError = error;
            // Throw a structured error
            throw {
                message: axiosError.response?.data?.message || axiosError.message,
                code: axiosError.response?.status?.toString() || '500',
                details: axiosError.response?.data?.details || undefined
            };
        }
        // For non-Axios errors
        throw {
            message: error instanceof Error ? error.message : 'خطای اتصال رخ داده است',
            code: '500'
        };
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/storage.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAuthToken": (()=>getAuthToken),
    "getSessionId": (()=>getSessionId),
    "removeAuthToken": (()=>removeAuthToken),
    "removeSessionId": (()=>removeSessionId),
    "setAuthToken": (()=>setAuthToken),
    "setSessionId": (()=>setSessionId)
});
const setAuthToken = (token)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.setItem('access_token', token);
    }
};
const setSessionId = (session_id)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.setItem('session_id', session_id);
    }
};
const getSessionId = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return localStorage.getItem('session_id');
    }
    "TURBOPACK unreachable";
};
const getAuthToken = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return localStorage.getItem('access_token');
    }
    "TURBOPACK unreachable";
};
const removeSessionId = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.removeItem('session_id');
    }
};
const removeAuthToken = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.removeItem('access_token');
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/forms/LoginForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$form$2d$components$2f$VerificationCodeInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/forms/form-components/VerificationCodeInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/auth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const LoginForm = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [showVerificationCode, setShowVerificationCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cooldown, setCooldown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [showPhoneInput, setShowPhoneInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [phoneNumber, setPhoneNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [verificationCode, setVerificationCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleBackToPhone = ()=>{
        setTimeout(()=>{
            setShowPhoneInput(true);
        }, 300);
        setTimeout(()=>{
            setShowVerificationCode(false);
        }, 100);
    };
    const startCooldown = ()=>{
        setCooldown(180);
    };
    const handleSendCode = async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        if (!showVerificationCode) {
            // First step: request OTP
            try {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestOTP"])(phoneNumber);
                setShowPhoneInput(false);
                setTimeout(()=>{
                    setShowVerificationCode(true);
                    startCooldown();
                }, 300);
            } catch (err) {
                console.log(err);
                // Type guard to check if it's an APIError
                if (err && typeof err === 'object' && 'message' in err && 'code' in err) {
                    const apiError = err;
                    switch(apiError.code){
                        case '400':
                            setError('شماره تلفن نامعتبر است');
                            break;
                        case '404':
                            setError('شماره مورد نظر یافت نشد، لطفاابتدا ثبت نام کنید');
                            break;
                        case '429':
                            setError('درخواست‌های زیادی ارسال کرده‌اید. لطفاً کمی صبر کنید');
                            break;
                        case '500':
                            setError('خطای سرور. لطفاً بعداً تلاش کنید');
                            break;
                        default:
                            setError('خطا در ارسال کد تأیید. لطفاً مجدداً تلاش کنید');
                    }
                } else {
                    // Fallback for unexpected error formats
                    setError('خطا در ارسال کد تأیید. لطفاً مجدداً تلاش کنید');
                }
            }
        } else {
            // Second step: verify OTP
            try {
                const authResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyOTP"])({
                    phone_number: phoneNumber,
                    otp: verificationCode
                });
                // Store the token
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setAuthToken"])(authResponse.access_token);
                // Store session id
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setSessionId"])(authResponse.chat_session_id);
                router.push('/');
            } catch (err) {
                if (err && typeof err === 'object' && 'message' in err && 'code' in err) {
                    const apiError = err;
                    switch(apiError.code){
                        case '400':
                            setError('شماره تلفن نامعتبر است');
                            break;
                        case '404':
                            setError('شماره مورد نظر یافت نشد، لطفاابتدا ثبت نام کنید');
                            break;
                        case '429':
                            setError('درخواست‌های زیادی ارسال کرده‌اید. لطفاً کمی صبر کنید');
                            break;
                        case '500':
                            setError('خطای سرور. لطفاً بعداً تلاش کنید');
                            break;
                        default:
                            setError('خطا در ارسال کد تأیید. لطفاً مجدداً تلاش کنید');
                    }
                } else {
                    // Fallback for unexpected error formats
                    setError('خطا در ارسال کد تأیید. لطفاً مجدداً تلاش کنید');
                }
            }
        }
        setIsSubmitting(false);
    };
    const handleResendCode = async ()=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestOTP"])(phoneNumber);
            startCooldown();
            setError(null);
        } catch (err) {
            if (err && typeof err === 'object' && 'message' in err && 'code' in err) {
                const apiError = err;
                switch(apiError.code){
                    case '400':
                        setError('شماره تلفن نامعتبر است');
                        break;
                    case '404':
                        setError('شماره مورد نظر یافت نشد، لطفاابتدا ثبت نام کنید');
                        break;
                    case '429':
                        setError('درخواست‌های زیادی ارسال کرده‌اید. لطفاً کمی صبر کنید');
                        break;
                    case '500':
                        setError('خطای سرور. لطفاً بعداً تلاش کنید');
                        break;
                    default:
                        setError('خطا در ارسال کد تأیید. لطفاً مجدداً تلاش کنید');
                }
            } else {
                // Fallback for unexpected error formats
                setError('خطا در ارسال کد تأیید. لطفاً مجدداً تلاش کنید');
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginForm.useEffect": ()=>{
            let timer;
            if (cooldown > 0) {
                timer = setTimeout({
                    "LoginForm.useEffect": ()=>setCooldown(cooldown - 1)
                }["LoginForm.useEffect"], 1000);
            }
            return ({
                "LoginForm.useEffect": ()=>clearTimeout(timer)
            })["LoginForm.useEffect"];
        }
    }["LoginForm.useEffect"], [
        cooldown
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSendCode,
        className: "w-full max-w-md flex flex-col gap-2 p-6 bg-white dark:bg-gray-800 rounded-xl dark:shadow-gray-900/50 rtl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-2",
                children: "ورود"
            }, void 0, false, {
                fileName: "[project]/src/components/forms/LoginForm.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-red-500 text-sm text-center mb-2",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/forms/LoginForm.tsx",
                lineNumber: 166,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-36 flex flex-col justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-24 w-full flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                            mode: "wait",
                            children: [
                                showPhoneInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    exit: {
                                        x: -100,
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.3
                                    },
                                    className: "w-full flex flex-row items-center border-2 border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden transition-all focus-within:border-blue-500 dark:focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-200 dark:focus-within:ring-blue-900",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BiPhone"], {
                                            size: 20,
                                            className: "mx-3 text-gray-500 dark:text-gray-300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/LoginForm.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "w-full h-12 pl-3 text-lg bg-transparent border-none focus:outline-none placeholder-gray-400 dark:placeholder-gray-500 text-right text-gray-800 dark:text-gray-100",
                                            placeholder: "شماره تلفن",
                                            type: "tel",
                                            required: true,
                                            value: phoneNumber,
                                            onChange: (e)=>setPhoneNumber(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/LoginForm.tsx",
                                            lineNumber: 182,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, "phone-input", true, {
                                    fileName: "[project]/src/components/forms/LoginForm.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this),
                                showVerificationCode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        x: 100,
                                        opacity: 0
                                    },
                                    animate: {
                                        x: 0,
                                        opacity: 1
                                    },
                                    exit: {
                                        x: 100,
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 0.3
                                    },
                                    className: "w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$form$2d$components$2f$VerificationCodeInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        onBack: handleBackToPhone,
                                        onResendCode: handleResendCode,
                                        cooldown: cooldown,
                                        resetCooldown: ()=>setCooldown(0),
                                        onChange: (code)=>setVerificationCode(code)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/LoginForm.tsx",
                                        lineNumber: 202,
                                        columnNumber: 17
                                    }, this)
                                }, "verification-input", false, {
                                    fileName: "[project]/src/components/forms/LoginForm.tsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/forms/LoginForm.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/LoginForm.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/sign-up`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors",
                            children: "حساب کاربری ندارید ؟ از اینجا می توانید ایجاد کنید."
                        }, void 0, false, {
                            fileName: "[project]/src/components/forms/LoginForm.tsx",
                            lineNumber: 215,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/LoginForm.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/forms/LoginForm.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                className: "w-full h-12 bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 mt-4 shadow-md hover:shadow-lg dark:shadow-blue-900/50",
                disabled: isSubmitting,
                children: isSubmitting ? 'در حال پردازش...' : showVerificationCode ? 'تأیید و ورود' : 'ارسال کد'
            }, void 0, false, {
                fileName: "[project]/src/components/forms/LoginForm.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/forms/LoginForm.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
};
_s(LoginForm, "tJv57qNQjSE/e/Wtc4rKKwPJuOQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginForm;
const __TURBOPACK__default__export__ = LoginForm;
var _c;
__turbopack_context__.k.register(_c, "LoginForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sliders/AuthSlidersData.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "data": (()=>data)
});
const data = [
    {
        src: "/images/slide-image1.jpg",
        title: "img3"
    },
    {
        src: "/images/slide-image2.jpg",
        title: "img2"
    },
    {
        src: "/images/slide-image3.jpg",
        title: "img3"
    },
    {
        src: "/images/slide-image4.jpg",
        title: "img3"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sliders/AuthSliders.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sliders$2f$AuthSlidersData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sliders/AuthSlidersData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const AuthSliders = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
            modules: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
            ],
            slidesPerView: 1,
            autoplay: {
                delay: 6000
            },
            loop: true,
            pagination: {
                clickable: true
            },
            className: "h-full w-full",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sliders$2f$AuthSlidersData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["data"].map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                    className: "relative h-full w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: image.src,
                        alt: image.title,
                        className: "object-cover",
                        fill: true,
                        quality: 100,
                        priority: index === 0,
                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sliders/AuthSliders.tsx",
                        lineNumber: 26,
                        columnNumber: 25
                    }, this)
                }, index, false, {
                    fileName: "[project]/src/components/sliders/AuthSliders.tsx",
                    lineNumber: 25,
                    columnNumber: 21
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/sliders/AuthSliders.tsx",
            lineNumber: 16,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sliders/AuthSliders.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
};
_c = AuthSliders;
const __TURBOPACK__default__export__ = AuthSliders;
var _c;
__turbopack_context__.k.register(_c, "AuthSliders");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/containers/image-containers/AuthBackgroundImageContainer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const AuthBackgroundImageContainer = ()=>{
    _s();
    const { resolvedTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    if (resolvedTheme === "dark") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "size-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/auth-dark-bg.jpg",
                alt: "logo",
                className: "",
                fill: true,
                quality: 100
            }, void 0, false, {
                fileName: "[project]/src/components/containers/image-containers/AuthBackgroundImageContainer.tsx",
                lineNumber: 16,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/containers/image-containers/AuthBackgroundImageContainer.tsx",
            lineNumber: 13,
            columnNumber: 13
        }, this);
    } else {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "size-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/auth-light-bg.jpg",
                alt: "logo",
                className: "",
                fill: true,
                quality: 100
            }, void 0, false, {
                fileName: "[project]/src/components/containers/image-containers/AuthBackgroundImageContainer.tsx",
                lineNumber: 31,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/containers/image-containers/AuthBackgroundImageContainer.tsx",
            lineNumber: 28,
            columnNumber: 13
        }, this);
    }
};
_s(AuthBackgroundImageContainer, "ZFEt0jE4OUgXZiwzKU9YAbCBnGI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = AuthBackgroundImageContainer;
const __TURBOPACK__default__export__ = AuthBackgroundImageContainer;
var _c;
__turbopack_context__.k.register(_c, "AuthBackgroundImageContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_c311a1fd._.js.map