var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Comments_exports = {};
__export(Comments_exports, {
  default: () => Comments_default
});
module.exports = __toCommonJS(Comments_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CommentsDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 176C416 273.201 322.875 352 208 352C169.818 352 134.156 343.146 103.402 327.955C78.418 340.879 46.006 352 7.66 352C4.602 352 1.9 350.275 0.641 347.395C-0.588 344.516 -0.018 341.246 2.082 339.041C2.443 338.68 25.285 314.123 41.672 281.359C15.621 251.963 0 215.57 0 176C0 78.797 93.125 0 208 0S416 78.797 416 176Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M638.039 499.041C640.139 501.246 640.709 504.516 639.48 507.395C638.221 510.275 635.52 512 632.461 512C596.207 512 565.365 502.02 540.969 490.018C513.443 503.992 481.814 512 448.121 512C358.107 512 282.779 455.143 262 378.523C368.441 357.248 448.121 274.617 448.121 176C448.121 170.613 447.654 165.328 447.188 160.043C447.502 160.041 447.807 160 448.121 160C554.16 160 640.121 238.797 640.121 336C640.121 376.635 624.949 413.945 599.715 443.736C615.988 475.266 637.688 498.689 638.039 499.041Z" })
    ]
  }
));
CommentsDuotone.displayName = "CommentsDuotone";
var Comments_default = CommentsDuotone;
