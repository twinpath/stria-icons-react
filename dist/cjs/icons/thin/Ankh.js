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
var Ankh_exports = {};
__export(Ankh_exports, {
  default: () => Ankh_default
});
module.exports = __toCommonJS(Ankh_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AnkhThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M280 280H179.266C222.055 235.396 263.469 169.963 263.469 116.688C263.469 44.719 223.812 0 160 0S56.531 44.719 56.531 116.688C56.531 169.963 97.945 235.396 140.734 280H40C35.594 280 32 283.578 32 288S35.594 296 40 296H152V504C152 508.422 155.594 512 160 512S168 508.422 168 504V296H280C284.406 296 288 292.422 288 288S284.406 280 280 280ZM160 16C214.781 16 247.469 53.641 247.469 116.688C247.469 171.844 197.062 240.469 160 276.922C122.938 240.469 72.531 171.844 72.531 116.688C72.531 53.641 105.219 16 160 16Z" })
  }
));
AnkhThin.displayName = "AnkhThin";
var Ankh_default = AnkhThin;
