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
var Speaker_exports = {};
__export(Speaker_exports, {
  default: () => Speaker_default
});
module.exports = __toCommonJS(Speaker_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SpeakerDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 0H48C21.5 0 0 21.5 0 48V464C0 490.5 21.5 512 48 512H336C362.5 512 384 490.5 384 464V48C384 21.5 362.5 0 336 0ZM192 64C218.5 64 240 85.5 240 112S218.5 160 192 160S144 138.5 144 112S165.5 64 192 64ZM192 448C130.188 448 80 397.828 80 336S130.188 224 192 224S304 274.172 304 336S253.812 448 192 448Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 160C218.5 160 240 138.5 240 112S218.5 64 192 64S144 85.5 144 112S165.5 160 192 160ZM192 224C130.188 224 80 274.172 80 336S130.188 448 192 448S304 397.828 304 336S253.812 224 192 224ZM192 400C156.688 400 128 371.328 128 336S156.688 272 192 272S256 300.672 256 336S227.312 400 192 400Z" })
    ]
  }
));
SpeakerDuotone.displayName = "SpeakerDuotone";
var Speaker_default = SpeakerDuotone;
