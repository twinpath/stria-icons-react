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
var CarGarage_exports = {};
__export(CarGarage_exports, {
  default: () => CarGarage_default
});
module.exports = __toCommonJS(CarGarage_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CarGarageDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 182.24C640 184.868 639.356 187.535 638.005 190L630.255 204C627.271 209.285 621.787 212.245 616.143 212.245C613.511 212.245 610.844 211.602 608.379 210.25L320 51.5L31.621 210.25C29.156 211.602 26.489 212.245 23.857 212.245C18.213 212.245 12.729 209.285 9.745 204L1.995 190C0.644 187.535 0 184.868 0 182.24C0 176.605 2.96 171.148 8.245 168.25L308.375 3C312 1 316 0 320 0S328 1 331.625 3L631.755 168.25C637.04 171.148 640 176.605 640 182.24Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M510.516 293.551L483.781 213.334C473.164 181.482 443.359 160 409.785 160H230.219C196.645 160 166.836 181.486 156.219 213.34L129.484 293.551C109.938 301.029 96 319.826 96 342V480C96 497.672 110.328 512 128 512H144C161.672 512 176 497.672 176 480V447H464V480C464 497.672 478.328 512 496 512H512C529.672 512 544 497.672 544 480V342C544 319.826 530.062 301.029 510.516 293.551ZM216.934 233.576C218.844 227.848 224.184 224 230.219 224H409.785C415.82 224 421.156 227.846 423.062 233.57L441.203 288H198.797L216.934 233.576ZM176 392C162.746 392 152 381.254 152 368C152 354.744 162.746 344 176 344S200 354.744 200 368C200 381.254 189.254 392 176 392ZM464 392C450.746 392 440 381.254 440 368C440 354.744 450.746 344 464 344S488 354.744 488 368C488 381.254 477.254 392 464 392Z " })
    ]
  }
));
CarGarageDuotone.displayName = "CarGarageDuotone";
var CarGarage_default = CarGarageDuotone;
