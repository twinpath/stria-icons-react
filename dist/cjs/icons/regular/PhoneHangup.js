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
var PhoneHangup_exports = {};
__export(PhoneHangup_exports, {
  default: () => PhoneHangup_default
});
module.exports = __toCommonJS(PhoneHangup_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PhoneHangupRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M624.916 239.875C543.619 157.406 435.338 112 320.01 112C204.697 112 96.416 157.406 15.119 239.875C-1.897 257.156 -4.881 283.609 7.853 304.188L56.619 383.281C69.822 404.813 96.432 413.531 120.025 404.281L217.682 364.688C238.822 356.031 252.01 334 249.744 311.125L245.525 268.141C294.15 254.859 345.947 254.891 394.635 268.141L390.432 310.937C387.978 334 401.244 356.125 422.588 364.719L520.103 404.25C526.432 406.812 532.994 408.031 539.463 408.031C556.932 408.031 573.728 399.094 583.4 383.344L632.182 304.219C644.932 283.578 641.932 257.109 624.916 239.875ZM591.338 279.016V279.031L542.525 358.188C541.603 359.75 539.666 360.375 538.119 359.75L440.541 320.188C439.025 319.594 437.978 317.75 438.182 315.812L444.322 253.359C445.4 242.312 438.775 231.969 428.291 228.344C358.478 204.156 281.619 204.172 211.869 228.328C201.385 231.953 194.76 242.297 195.838 253.344L201.963 315.844C202.166 317.719 201.119 319.594 199.572 320.219L102.15 359.719C100.369 360.437 98.494 359.781 97.494 358.125L48.697 278.969C47.603 277.203 47.853 275.031 49.307 273.562C121.51 200.328 217.65 160 320.01 160C422.385 160 518.525 200.328 590.744 273.578C592.197 275.047 592.432 277.234 591.338 279.016Z" })
  }
));
PhoneHangupRegular.displayName = "PhoneHangupRegular";
var PhoneHangup_default = PhoneHangupRegular;
