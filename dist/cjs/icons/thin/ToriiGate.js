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
var ToriiGate_exports = {};
__export(ToriiGate_exports, {
  default: () => ToriiGate_default
});
module.exports = __toCommonJS(ToriiGate_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ToriiGateThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M472 144C494.062 144 512 126.064 512 104.006V8.021C512 5.256 510.562 2.678 508.219 1.225C505.844 -0.26 502.906 -0.416 500.437 0.865C459.531 21.238 413.906 32.018 368.5 32.018H143.5C98.094 32.018 52.469 21.238 11.562 0.865C9.094 -0.385 6.125 -0.229 3.781 1.225S0 5.256 0 8.021V104.006C0 126.064 17.938 144 40 144H80V224H8C3.594 224 0 227.578 0 232S3.594 240 8 240H80V504C80 508.422 83.594 512 88 512S96 508.422 96 504V240H416V504C416 508.422 419.594 512 424 512S432 508.422 432 504V240H504C508.406 240 512 236.422 512 232S508.406 224 504 224H432V144H472ZM248 224H96V144H248V224ZM416 224H264V144H416V224ZM40 128.002C26.781 128.002 16 117.238 16 104.006V20.645C56.031 38.578 99.875 48.014 143.5 48.014H368.5C412.125 48.014 455.969 38.578 496 20.645V104.006C496 117.238 485.219 128.002 472 128.002H40Z" })
  }
));
ToriiGateThin.displayName = "ToriiGateThin";
var ToriiGate_default = ToriiGateThin;
