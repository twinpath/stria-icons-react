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
var CirclePhoneHangup_exports = {};
__export(CirclePhoneHangup_exports, {
  default: () => CirclePhoneHangup_default
});
module.exports = __toCommonJS(CirclePhoneHangup_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CirclePhoneHangupDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 256C496 123.451 388.549 16 256 16S16 123.451 16 256S123.451 496 256 496S496 388.549 496 256ZM373.504 306.149L318.707 284.233C312.233 281.67 308.239 275.046 308.979 268.163L312.432 233.565C275.927 221.102 236.125 221.096 199.637 233.553L203.077 268.175C203.774 275.081 199.813 281.638 193.371 284.235L138.537 306.166C131.466 308.928 123.44 306.293 119.451 299.896L92.049 256.054C88.16 249.867 89.066 241.912 94.248 236.73C183.444 147.534 328.563 147.541 417.747 236.724C422.934 241.912 423.841 249.868 419.958 256.061L392.546 299.912C388.58 306.265 380.542 308.945 373.504 306.149Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M373.856 306.149L319.06 284.233C312.585 281.67 308.591 275.046 309.331 268.163L312.784 233.565C276.28 221.102 236.477 221.096 199.989 233.553L203.43 268.175C204.126 275.081 200.165 281.638 193.724 284.235L138.89 306.166C131.819 308.928 123.792 306.293 119.803 299.896L92.402 256.054C88.512 249.867 89.418 241.912 94.6 236.73C183.796 147.534 328.915 147.541 418.099 236.724C423.286 241.912 424.193 249.868 420.31 256.061L392.898 299.912C388.932 306.265 380.894 308.945 373.856 306.149Z" })
    ]
  }
));
CirclePhoneHangupDuotone.displayName = "CirclePhoneHangupDuotone";
var CirclePhoneHangup_default = CirclePhoneHangupDuotone;
