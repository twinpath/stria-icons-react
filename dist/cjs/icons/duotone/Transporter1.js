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
var Transporter1_exports = {};
__export(Transporter1_exports, {
  default: () => Transporter1_default
});
module.exports = __toCommonJS(Transporter1_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Transporter1Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M93.75 364.375L64 352L51.625 322.25C50.875 320.875 49.5 320 48 320S45.125 320.875 44.375 322.25L32 352L2.25 364.375C0.875 365.125 0 366.5 0 368S0.875 370.875 2.25 371.625L32 384L44.375 413.75C45.125 415.125 46.5 416 48 416S50.875 415.125 51.625 413.75L64 384L93.75 371.625C95.125 370.875 96 369.5 96 368S95.125 365.125 93.75 364.375ZM509.75 172.375L480 160L467.625 130.25C466.875 128.875 465.5 128 464 128S461.125 128.875 460.375 130.25L448 160L418.25 172.375C416.875 173.125 416 174.5 416 176S416.875 178.875 418.25 179.625L448 192L460.375 221.75C461.125 223.125 462.5 224 464 224S466.875 223.125 467.625 221.75L480 192L509.75 179.625C511.125 178.875 512 177.5 512 176S511.125 173.125 509.75 172.375ZM336 320H176C167.156 320 160 327.156 160 336S167.156 352 176 352H336C344.844 352 352 344.844 352 336S344.844 320 336 320ZM336 384H176C167.156 384 160 391.156 160 400S167.156 416 176 416H336C344.844 416 352 408.844 352 400S344.844 384 336 384Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.02 96C282.52 96 304.02 74.5 304.02 48S282.52 0 256.02 0S208.02 21.5 208.02 48S229.52 96 256.02 96ZM152.645 276.5L184.02 238.75V288H328.02V238.75L359.395 276.5C370.77 290 390.895 291.875 404.52 280.625C418.02 269.25 419.895 249.125 408.645 235.5L338.145 151C326.02 136.375 308.02 128 289.02 128H223.02C204.02 128 186.02 136.375 173.895 151L103.395 235.5C92.145 249.125 93.895 269.25 107.52 280.625C121.145 291.875 141.27 290 152.645 276.5ZM384.02 448H128.02C110.395 448 96.02 462.375 96.02 480V512H416.02V480C416.02 462.375 401.645 448 384.02 448Z" })
    ]
  }
));
Transporter1Duotone.displayName = "Transporter1Duotone";
var Transporter1_default = Transporter1Duotone;
