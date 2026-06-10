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
var Function_exports = {};
__export(Function_exports, {
  default: () => Function_default
});
module.exports = __toCommonJS(Function_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FunctionDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M317.875 142.75C303.969 131.875 283.844 134.406 272.969 148.344C241.844 188.312 224 250.875 224 320S241.844 451.688 272.969 491.656C279.281 499.75 288.703 504 298.234 504C305.109 504 312.031 501.812 317.875 497.25C331.828 486.375 334.328 466.281 323.469 452.344C301.594 424.25 288 373.531 288 320S301.594 215.75 323.469 187.656C334.328 173.719 331.828 153.625 317.875 142.75ZM591.031 148.344C580.141 134.375 560.047 131.844 546.125 142.75C532.172 153.625 529.672 173.719 540.531 187.656C562.406 215.75 576 266.469 576 320S562.406 424.25 540.531 452.344C529.672 466.281 532.172 486.375 546.125 497.25C551.969 501.812 558.891 504 565.766 504C575.281 504 584.719 499.75 591.031 491.656C622.156 451.688 640 389.125 640 320S622.156 188.312 591.031 148.344Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M184 0H152C99.062 0 56 43.062 56 96V168H40C17.906 168 0 185.906 0 208S17.906 248 40 248H56V384C56 392.812 48.828 400 40 400C17.906 400 0 417.906 0 440S17.906 480 40 480C92.938 480 136 436.938 136 384V248H152C174.094 248 192 230.094 192 208S174.094 168 152 168H136V96C136 87.188 143.172 80 152 80H184C206.094 80 224 62.094 224 40S206.094 0 184 0ZM477.25 320L510.625 286.625C523.125 274.125 523.125 253.875 510.625 241.375S477.875 228.875 465.375 241.375L432 274.75L398.625 241.375C386.125 228.875 365.875 228.875 353.375 241.375S340.875 274.125 353.375 286.625L386.75 320L353.375 353.375C340.875 365.875 340.875 386.125 353.375 398.625C359.625 404.875 367.812 408 376 408S392.375 404.875 398.625 398.625L432 365.25L465.375 398.625C471.625 404.875 479.812 408 488 408S504.375 404.875 510.625 398.625C523.125 386.125 523.125 365.875 510.625 353.375L477.25 320Z" })
    ]
  }
));
FunctionDuotone.displayName = "FunctionDuotone";
var Function_default = FunctionDuotone;
