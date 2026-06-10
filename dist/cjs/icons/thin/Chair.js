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
var Chair_exports = {};
__export(Chair_exports, {
  default: () => Chair_default
});
module.exports = __toCommonJS(Chair_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChairThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M445.06 338.594L430.294 306.594C425.06 295.25 413.716 288 401.232 288H383.998V136C383.998 61.016 322.998 0 247.998 0H199.998C124.998 0 63.998 61.016 63.998 136V288H46.763C34.279 288 22.935 295.25 17.701 306.594L2.935 338.594C-1.627 348.5 -0.83 360.062 5.045 369.25S21.091 384 31.998 384H47.998V504C47.998 508.422 51.591 512 55.998 512S63.998 508.422 63.998 504V384H383.998V504C383.998 508.422 387.591 512 391.998 512S399.998 508.422 399.998 504V384H415.998C426.904 384 437.076 378.438 442.951 369.25S449.623 348.5 445.06 338.594ZM367.998 136V288H295.998V26.174C338.3 44.742 367.998 86.914 367.998 136ZM247.998 16C259.15 16 269.744 18.023 279.998 20.885V288H231.998V16H247.998ZM215.998 16V288H167.998V20.885C178.252 18.023 188.845 16 199.998 16H215.998ZM79.998 136C79.998 86.914 109.695 44.742 151.998 26.174V288H79.998V136ZM429.47 360.629C426.521 365.244 421.484 368 415.998 368H31.998C26.511 368 21.474 365.244 18.525 360.631C15.568 356.006 15.173 350.27 17.462 345.297L32.228 313.297C34.836 307.648 40.541 304 46.763 304H401.232C407.455 304 413.16 307.648 415.767 313.297L430.527 345.287C432.822 350.27 432.427 356.006 429.47 360.629Z" })
  }
));
ChairThin.displayName = "ChairThin";
var Chair_default = ChairThin;
