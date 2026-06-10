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
var HeadphonesSimple_exports = {};
__export(HeadphonesSimple_exports, {
  default: () => HeadphonesSimple_default
});
module.exports = __toCommonJS(HeadphonesSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadphonesSimpleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 32C112.906 32 4.562 151.125 0 288V392C0 405.255 10.745 416 24 416H24C37.255 416 48 405.255 48 392V288C48 173.328 141.344 80.203 256 80.188C370.656 80.203 464 173.328 464 288V392C464 405.255 474.745 416 488 416L488 416C501.255 416 512 405.255 512 392V288C507.438 151.125 399.094 32 256 32Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 288H144C108.656 288 80 316.703 80 352.125V415.875C80 451.297 108.656 480 144 480H160C177.656 480 192 465.641 192 447.938V320.062C192 302.344 177.656 288 160 288ZM368 288H352C334.344 288 320 302.344 320 320.062V447.938C320 465.641 334.344 480 352 480H368C403.344 480 432 451.297 432 415.875V352.125C432 316.703 403.344 288 368 288Z" })
    ]
  }
));
HeadphonesSimpleDuotone.displayName = "HeadphonesSimpleDuotone";
var HeadphonesSimple_default = HeadphonesSimpleDuotone;
