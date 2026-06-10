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
var Syringe_exports = {};
__export(Syringe_exports, {
  default: () => Syringe_default
});
module.exports = __toCommonJS(Syringe_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SyringeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.656 95.998L413.656 0C410.531 -3.125 405.469 -3.125 402.344 0S399.219 8.188 402.344 11.313L444.688 53.656L384 114.342L301.656 32C298.531 28.875 293.469 28.875 290.344 32S287.219 40.187 290.344 43.312L466.344 219.311C469.471 222.437 474.529 222.437 477.656 219.311C480.781 216.186 480.781 211.123 477.656 207.998L395.313 125.654L456 64.969L498.344 107.311C501.471 110.438 506.529 110.438 509.656 107.311C512.781 104.186 512.781 99.123 509.656 95.998ZM409.984 215.641L204.797 420.859C190.406 435.344 170.266 442.266 149.984 440.156L78.5 431.172L69.547 359.594C67.328 339.109 74.359 319.125 88.844 304.75L128.299 265.268L186.344 323.313C189.471 326.439 194.529 326.439 197.656 323.313C200.781 320.188 200.781 315.125 197.656 312L139.607 253.951L192.277 201.246L250.344 259.313C253.471 262.439 258.529 262.439 261.656 259.313C264.781 256.188 264.781 251.125 261.656 248L203.586 189.93L293.906 99.547C297.031 96.422 297.031 91.359 293.906 88.234S285.719 85.109 282.594 88.234L77.547 293.422C59.609 311.219 50.891 335.969 53.656 361.438L62.902 435.441L2.344 496C-0.781 499.125 -0.781 504.188 2.344 507.313C5.471 510.439 10.529 510.439 13.656 507.313L74.219 446.75L148.125 456.047C172.506 458.756 197.693 450.697 216.125 432.156L421.297 226.953C424.422 223.828 424.422 218.766 421.297 215.641S413.109 212.516 409.984 215.641Z" })
  }
));
SyringeThin.displayName = "SyringeThin";
var Syringe_default = SyringeThin;
