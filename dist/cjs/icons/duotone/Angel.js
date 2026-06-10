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
var Angel_exports = {};
__export(Angel_exports, {
  default: () => Angel_default
});
module.exports = __toCommonJS(Angel_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AngelDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M383.997 64C383.997 66.25 380.747 70.125 374.872 74.25C381.497 82.625 387.247 91.5 391.497 101.375C406.746 90.875 415.996 78 415.996 64C415.996 28.75 358.748 0 288 0S160.004 28.75 160.004 64C160.004 78 169.254 90.875 184.503 101.375C188.628 91.5 194.378 82.5 201.128 74.25C195.253 70.25 192.003 66.375 192.003 64C192.003 56 226.002 32 288 32S383.997 56 383.997 64ZM571.741 453.125L533.617 374.5C526.993 361 526.993 344.875 533.617 331.375C538.367 321.625 542.242 314.75 545.492 309.25C554.992 292.75 559.992 282.75 559.992 256C559.992 204.875 513.118 160 459.62 160C434.745 160 410.621 170.25 393.247 188.125L320.63 261.494C346.283 270.039 368.124 288.271 380.608 313.242L479.984 512H535.617C549.492 512 562.242 504.875 569.741 493C577.241 480.875 578.116 465.875 571.741 453.125ZM116.505 160C63.007 160 16.008 204.875 16.008 256C16.008 282.75 21.008 292.75 30.508 309.25C33.758 314.75 37.633 321.5 42.383 331.25C49.007 344.75 49.007 360.875 42.383 374.375L4.259 453.125C-2.116 466 -1.241 480.875 6.259 493C13.758 504.875 26.508 512 40.508 512H95.996L195.372 313.242C207.889 288.207 229.81 269.939 255.548 261.422L183.003 188.25C165.504 170.25 141.255 160 116.505 160Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288.004 224C332.252 224 368.001 188.25 368.001 144S332.252 64 288.004 64S208.006 99.75 208.006 144S243.755 224 288.004 224ZM380.612 313.242C363.072 278.16 327.216 256 287.994 256S212.916 278.16 195.376 313.242L96 512H479.988L380.612 313.242Z" })
    ]
  }
));
AngelDuotone.displayName = "AngelDuotone";
var Angel_default = AngelDuotone;
