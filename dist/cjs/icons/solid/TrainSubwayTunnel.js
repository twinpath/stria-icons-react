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
var TrainSubwayTunnel_exports = {};
__export(TrainSubwayTunnel_exports, {
  default: () => TrainSubwayTunnel_default
});
module.exports = __toCommonJS(TrainSubwayTunnel_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrainSubwayTunnelSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 214.855C352 202.268 341.732 192 329.145 192H182.857C170.27 192 160 202.268 160 214.855V297.143C160 309.732 170.27 320 182.857 320H329.145C341.732 320 352 309.732 352 297.143V214.855ZM328 352C314.781 352 304 362.781 304 376S314.781 400 328 400S352 389.219 352 376S341.219 352 328 352ZM184 400C197.219 400 208 389.219 208 376S197.219 352 184 352S160 362.781 160 376S170.781 400 184 400ZM256 0C114.615 0 0 114.613 0 256V448C0 483.346 28.654 512 64 512H105.375L169.982 447.393C137.502 444.316 112 417.285 112 384V192C112 156.652 140.654 128 176 128H336C371.346 128 400 156.652 400 192V384C400 417.285 374.498 444.316 342.018 447.393L406.625 512H448C483.346 512 512 483.346 512 448V256C512 114.613 397.385 0 256 0ZM214.625 448L150.625 512H361.375L297.375 448H214.625Z" })
  }
));
TrainSubwayTunnelSolid.displayName = "TrainSubwayTunnelSolid";
var TrainSubwayTunnel_default = TrainSubwayTunnelSolid;
