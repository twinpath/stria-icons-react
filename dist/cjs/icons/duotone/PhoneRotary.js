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
var PhoneRotary_exports = {};
__export(PhoneRotary_exports, {
  default: () => PhoneRotary_default
});
module.exports = __toCommonJS(PhoneRotary_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PhoneRotaryDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M506.125 123C436.75 65 347.375 32 256 32S75.25 65 5.875 123C2.125 126.125 0 130.75 0 135.625V192C0 200.875 7.125 208 16 208H86.125C92.125 208 97.75 204.625 100.375 199.125L128 128C167.875 110.75 211.25 104 256 104S344.125 110.75 384 128L411.625 199.125C414.25 204.625 419.875 208 425.875 208H496C504.875 208 512 200.875 512 192V135.625C512 130.75 509.875 126.125 506.125 123ZM256 240C216.25 240 184 272.25 184 312S216.25 384 256 384S328 351.75 328 312S295.75 240 256 240Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M475.75 376.625L370.375 192.25C359 172.25 337.875 160 314.875 160H197.125C174.125 160 153 172.25 141.625 192.25L36.25 376.625C33.5 381.5 32 386.875 32 392.5V448C32 465.625 46.375 480 64 480H448C465.625 480 480 465.625 480 448V392.5C480 386.875 478.5 381.5 475.75 376.625ZM256 384C216.25 384 184 351.75 184 312S216.25 240 256 240S328 272.25 328 312S295.75 384 256 384Z" })
    ]
  }
));
PhoneRotaryDuotone.displayName = "PhoneRotaryDuotone";
var PhoneRotary_default = PhoneRotaryDuotone;
