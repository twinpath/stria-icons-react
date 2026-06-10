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
var EnvelopeOpen_exports = {};
__export(EnvelopeOpen_exports, {
  default: () => EnvelopeOpen_default
});
module.exports = __toCommonJS(EnvelopeOpen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EnvelopeOpenRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M493.625 163.002C468.75 143.377 448.125 127.629 329.375 41.379C312.73 29.207 279.672 0 256.441 0C256.293 0 256.145 0.002 256 0.004C255.852 0.002 255.707 0 255.559 0C232.328 0 199.27 29.207 182.625 41.379C63.875 127.629 43.25 143.377 18.375 163.002C6.75 172.002 0 186.004 0 200.752V448C0 483.346 28.654 512 64 512H448C483.348 512 512 483.346 512 448V200.752C512 186.004 505.25 172.002 493.625 163.002ZM464 448C464 456.822 456.822 464 448 464H64C55.178 464 48 456.822 48 448V276.662L184.062 390.047C204.25 406.828 229.781 416.078 256 416.078S307.75 406.828 327.969 390.031L464 276.664V448ZM464 214.162L297.25 353.141C274.062 372.422 237.906 372.406 214.781 353.156L48 214.162V208H48.102L48.105 200.686C71.344 182.352 90.359 167.717 210.959 80.125C214.041 77.871 217.633 75.098 221.592 72.031C229.385 65.994 246.688 52.594 256 48.621C265.312 52.594 282.615 65.994 290.408 72.031C294.367 75.098 297.961 77.871 301.168 80.217C421.641 167.717 440.656 182.352 464 200.752V214.162Z" })
  }
));
EnvelopeOpenRegular.displayName = "EnvelopeOpenRegular";
var EnvelopeOpen_default = EnvelopeOpenRegular;
