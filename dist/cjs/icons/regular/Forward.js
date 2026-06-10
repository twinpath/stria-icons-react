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
var Forward_exports = {};
__export(Forward_exports, {
  default: () => Forward_default
});
module.exports = __toCommonJS(Forward_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ForwardRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.031 96.027V415.973C256.031 435.191 271.744 448 288.248 448C295.248 448 302.393 445.693 308.537 440.594L500.561 280.621C515.812 267.748 515.812 244.252 500.561 231.379L308.537 71.406C302.393 66.305 295.25 64 288.248 64C271.746 64 256.031 76.811 256.031 96.027ZM304.031 130.125L455.125 256L304.031 381.873V130.125ZM0 96.016V415.984C0 427.672 6.375 438.422 16.625 444.047C21.406 446.672 26.719 447.984 32 447.984C37.969 447.984 43.969 446.312 49.188 442.969L212.875 338.812C224.063 331.703 227.375 316.859 220.25 305.672C213.156 294.484 198.312 291.188 187.125 298.312L48 386.828V125.172L187.125 213.688C198.312 220.812 213.156 217.516 220.25 206.328C227.375 195.141 224.062 180.297 212.875 173.188L49.156 69.016C39.312 62.781 26.875 62.328 16.625 67.953S0 84.328 0 96.016Z" })
  }
));
ForwardRegular.displayName = "ForwardRegular";
var Forward_default = ForwardRegular;
