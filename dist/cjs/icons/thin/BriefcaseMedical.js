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
var BriefcaseMedical_exports = {};
__export(BriefcaseMedical_exports, {
  default: () => BriefcaseMedical_default
});
module.exports = __toCommonJS(BriefcaseMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BriefcaseMedicalThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 96H384V40C384 17.938 366.062 0 344 0H168C145.938 0 128 17.938 128 40V96H48C21.492 96 0 117.49 0 144V432C0 458.51 21.492 480 48 480H464C490.508 480 512 458.51 512 432V144C512 117.49 490.508 96 464 96ZM144 40C144 26.781 154.781 16 168 16H344C357.219 16 368 26.781 368 40V96H144V40ZM496 432C496 449.645 481.645 464 464 464H48C30.355 464 16 449.645 16 432V144C16 126.355 30.355 112 48 112H464C481.645 112 496 126.355 496 144V432ZM344 247.959H296V199.959C296 191.123 288.836 183.959 280 183.959H232C223.164 183.959 216 191.123 216 199.959V247.959H168C159.164 247.959 152 255.123 152 263.959V311.959C152 320.795 159.164 327.959 168 327.959H216V375.959C216 384.795 223.164 391.959 232 391.959H280C288.836 391.959 296 384.795 296 375.959V327.959H344C352.836 327.959 360 320.795 360 311.959V263.959C360 255.123 352.836 247.959 344 247.959ZM344 311.959H280V375.959H232V311.959H168V263.959H232V199.959H280V263.959H344V311.959Z" })
  }
));
BriefcaseMedicalThin.displayName = "BriefcaseMedicalThin";
var BriefcaseMedical_default = BriefcaseMedicalThin;
