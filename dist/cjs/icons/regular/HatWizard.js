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
var HatWizard_exports = {};
__export(HatWizard_exports, {
  default: () => HatWizard_default
});
module.exports = __toCommonJS(HatWizard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HatWizardRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M307.9 199.477L283.057 187.055L270.635 162.211C269.158 159.262 264.955 159.262 263.479 162.211L251.057 187.055L226.213 199.477C223.264 200.953 223.264 205.156 226.213 206.633L251.057 219.055L263.479 243.898C264.955 246.848 269.158 246.848 270.635 243.898L283.057 219.055L307.9 206.633C310.85 205.156 310.85 200.953 307.9 199.477ZM496 448H16C7.164 448 0 455.164 0 464C0 490.508 21.492 512 48 512H464C490.508 512 512 490.508 512 464C512 455.164 504.836 448 496 448ZM203.188 187.25C211.25 168.906 224.812 153.875 242.406 143.844L361.062 76L329.031 172.219C322.469 191.75 323.344 212.781 331.344 231.125L408.605 416H460.648L375.5 212.281C372.125 204.531 371.781 195.719 374.562 187.469L426.469 31.594C429.594 22.156 426.594 11.75 418.906 5.438C411.188 -0.844 400.469 -1.781 391.781 3.156L218.594 102.156C192.031 117.344 171.5 140.094 159.469 167.438L43.865 416H96.787L203.188 187.25ZM248 328L231.59 278.766C229.156 271.477 218.844 271.477 216.41 278.766L200 328L150.766 344.41C143.477 346.844 143.477 357.156 150.766 359.59L200 376L208 416H240L248 376L297.234 359.59C304.523 357.156 304.523 346.844 297.234 344.41L248 328Z" })
  }
));
HatWizardRegular.displayName = "HatWizardRegular";
var HatWizard_default = HatWizardRegular;
