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
var Sink_exports = {};
__export(Sink_exports, {
  default: () => Sink_default
});
module.exports = __toCommonJS(Sink_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SinkRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 288H400V256H456C469.255 256 480 245.255 480 232V232C480 218.745 469.255 208 456 208H384C366.327 208 352 222.327 352 240V288H280V88C280 64.562 300.245 45.779 324.171 48.214C344.984 50.331 360 69.432 360 90.353L360 104C360 117.255 370.745 128 384 128H384C397.255 128 408 117.255 408 104V88C408 36.572 363.681 -4.678 311.224 0.428C265.503 4.879 232 45.971 232 91.908L232 288H160V240C160 222.327 145.673 208 128 208H56C42.745 208 32 218.745 32 232V232C32 245.255 42.745 256 56 256H112V288H24C10.745 288 0 298.745 0 312V312C0 325.255 10.745 336 24 336H32V416C32 469.019 74.981 512 128 512H384C437.019 512 480 469.019 480 416V336H488C501.255 336 512 325.255 512 312V312C512 298.745 501.255 288 488 288ZM432 416C432 442.467 410.467 464 384 464H128C101.533 464 80 442.467 80 416V336H432V416Z" })
  }
));
SinkRegular.displayName = "SinkRegular";
var Sink_default = SinkRegular;
