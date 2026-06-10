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
var FolderMedical_exports = {};
__export(FolderMedical_exports, {
  default: () => FolderMedical_default
});
module.exports = __toCommonJS(FolderMedical_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FolderMedicalThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 96H272L217.375 41.375C211.371 35.371 203.234 32 194.746 32H48C21.492 32 0 53.492 0 80V432C0 458.508 21.492 480 48 480H464C490.508 480 512 458.508 512 432V144C512 117.492 490.508 96 464 96ZM496 432C496 449.672 481.672 464 464 464H48C30.328 464 16 449.672 16 432V80C16 62.328 30.328 48 48 48H188.117C196.602 48 204.742 51.371 210.742 57.371L265.371 112H464C481.672 112 496 126.328 496 144V432ZM338.281 248H296V205.719C296 193.75 286.25 184 274.281 184H237.719C225.75 184 216 193.75 216 205.719V248H173.719C161.75 248 152 257.75 152 269.719V306.281C152 318.25 161.75 328 173.719 328H216V370.281C216 382.25 225.75 392 237.719 392H274.281C286.25 392 296 382.25 296 370.281V328H338.281C350.25 328 360 318.25 360 306.281V269.719C360 257.75 350.25 248 338.281 248ZM344 306.281C344 309.438 341.438 312 338.281 312H280V370.281C280 373.438 277.438 376 274.281 376H237.719C234.562 376 232 373.438 232 370.281V312H173.719C170.562 312 168 309.438 168 306.281V269.719C168 266.562 170.562 264 173.719 264H232V205.719C232 202.562 234.562 200 237.719 200H274.281C277.438 200 280 202.562 280 205.719V264H338.281C341.438 264 344 266.562 344 269.719V306.281Z" })
  }
));
FolderMedicalThin.displayName = "FolderMedicalThin";
var FolderMedical_default = FolderMedicalThin;
