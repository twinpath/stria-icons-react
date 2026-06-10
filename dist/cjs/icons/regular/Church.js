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
var Church_exports = {};
__export(Church_exports, {
  default: () => Church_default
});
module.exports = __toCommonJS(Church_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChurchRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464.5 230.625L344 158.375V112H392C405.254 112 416 101.254 416 88C416 74.744 405.254 64 392 64H344V24C344 10.744 333.254 0 320 0S296 10.744 296 24V64H248C234.746 64 224 74.744 224 88C224 101.254 234.746 112 248 112H296V158.375L175.5 230.625C165.875 236.5 160 246.875 160 258.125V488C160 501.254 170.746 512 184 512S208 501.254 208 488V267.125L320 200L432 267.125V488C432 501.254 442.746 512 456 512S480 501.254 480 488V258.125C480 246.875 474.125 236.5 464.5 230.625ZM93.266 322.531L13.266 362.531C5.141 366.594 0 374.906 0 384V488C0 501.25 10.75 512 24 512S48 501.25 48 488V398.844L114.734 365.469C126.594 359.531 131.391 345.125 125.469 333.281C119.562 321.406 105.156 316.656 93.266 322.531ZM626.734 362.531L546.734 322.531C534.922 316.656 520.453 321.406 514.531 333.281C508.609 345.125 513.406 359.531 525.266 365.469L592 398.844V488C592 501.25 602.75 512 616 512S640 501.25 640 488V384C640 374.906 634.859 366.594 626.734 362.531ZM320 320C284.654 320 256 348.652 256 384V416V448V480C256 497.672 270.326 512 288 512H352C369.674 512 384 497.672 384 480V448V413.25V384C384 348.652 355.346 320 320 320Z" })
  }
));
ChurchRegular.displayName = "ChurchRegular";
var Church_default = ChurchRegular;
