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
var CruzeiroSign_exports = {};
__export(CruzeiroSign_exports, {
  default: () => CruzeiroSign_default
});
module.exports = __toCommonJS(CruzeiroSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CruzeiroSignDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 320.25V400.098C201.895 399.741 180.109 394.295 160 384.123V256.25C160 238.578 174.312 224.25 192 224.25C200.963 224.25 209.012 227.969 214.818 233.897C227.348 227.893 241.203 224.25 256 224.25C272.906 224.25 289.531 228.703 304.062 237.125C319.344 245.985 324.562 265.578 315.687 280.86C306.812 296.125 287.25 301.313 271.937 292.5C267.156 289.719 261.656 288.25 256 288.25C238.344 288.25 224 302.61 224 320.25Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M226.375 480.5C168.344 480.5 110.562 458.375 66.469 414.813C23.594 372.485 0 316.188 0 256.266C0 196.328 23.594 140.016 66.438 97.688C148.875 16.313 278.969 9.75 369.094 82.438C386.312 96.313 389 121.485 375.125 138.688C361.313 155.875 336.063 158.594 318.906 144.719C260.469 97.641 176.156 101.813 122.656 154.61C95.156 181.782 80 217.891 80 256.25C80 294.625 95.156 330.719 122.656 357.875C176.094 410.625 260.438 414.938 318.906 367.797C336.063 353.891 361.313 356.657 375.156 373.828C389 391.032 386.312 416.219 369.094 430.094C327.219 463.844 276.719 480.5 226.375 480.5Z" })
    ]
  }
));
CruzeiroSignDuotone.displayName = "CruzeiroSignDuotone";
var CruzeiroSign_default = CruzeiroSignDuotone;
