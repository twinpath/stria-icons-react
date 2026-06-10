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
const PhoneRotaryThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M354.375 192.25C343 172.25 321.875 160 298.875 160H213.125C190.125 160 169 172.25 157.625 192.25L52.25 376.625C49.5 381.5 48 386.875 48 392.5V448C48 465.625 62.375 480 80 480H432C449.625 480 464 465.625 464 448V392.5C464 386.875 462.5 381.5 459.75 376.625L354.375 192.25ZM448 448C448 456.822 440.822 464 432 464H80C71.178 464 64 456.822 64 448V392.5C64 389.754 64.736 387.057 66.141 384.564L171.533 200.16C180.01 185.258 195.945 176 213.125 176H298.875C316.055 176 331.992 185.258 340.484 200.189L445.814 384.486C447.266 387.057 448 389.754 448 392.5V448ZM256 240C216.297 240 184 272.297 184 312S216.297 384 256 384S328 351.703 328 312S295.703 240 256 240ZM256 368C225.125 368 200 342.875 200 312S225.125 256 256 256S312 281.125 312 312S286.875 368 256 368ZM503.547 124.938C434.094 65.016 346.188 32 256 32S77.906 65.016 8.469 124.938C3.078 129.578 0 136.391 0 143.625V200C0 213.234 10.547 224 23.5 224H91.438C100.453 224 108.719 218.688 112.719 209.938L138.297 141.969C172.656 127.188 211.188 120 256 120S339.344 127.188 373.703 141.969L399.5 210.469C403.281 218.688 411.547 224 420.562 224H488.5C501.453 224 512 213.234 512 200V143.625C512 136.391 508.922 129.578 503.547 124.938ZM496 200C496 204.484 492.703 208 488.5 208H420.562C417.781 208 415.219 206.344 414.25 204.312L386.312 130.062L383.266 128.703C346.047 112.078 304.422 104 256 104S165.953 112.078 128.734 128.703L125.688 130.062L97.969 203.781C96.781 206.344 94.219 208 91.438 208H23.5C19.297 208 16 204.484 16 200V143.625C16 141.047 17.062 138.656 18.922 137.062C85.453 79.625 169.656 48 256 48S426.547 79.625 493.078 137.062H493.094C494.938 138.656 496 141.047 496 143.625V200Z" })
  }
));
PhoneRotaryThin.displayName = "PhoneRotaryThin";
var PhoneRotary_default = PhoneRotaryThin;
