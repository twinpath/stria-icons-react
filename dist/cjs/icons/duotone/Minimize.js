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
var Minimize_exports = {};
__export(Minimize_exports, {
  default: () => Minimize_default
});
module.exports = __toCommonJS(Minimize_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MinimizeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M199.996 288H63.996C51.059 288 39.371 295.797 34.434 307.75C29.465 319.718 32.215 333.468 41.371 342.624L71.434 372.687L9.372 434.752C-3.123 447.248 -3.124 467.506 9.37 480.003L31.989 502.626C44.486 515.124 64.749 515.125 77.246 502.627L139.308 440.561L169.371 470.623C175.496 476.748 183.683 479.998 191.996 479.998C196.121 479.998 200.277 479.201 204.246 477.561C216.214 472.608 223.996 460.936 223.996 447.998V312C223.996 298.745 213.25 288 199.996 288ZM311.995 224H447.994C460.932 224 472.619 216.204 477.557 204.251C482.526 192.282 479.776 178.532 470.619 169.376L440.557 139.314L502.619 77.248C515.115 64.751 515.116 44.49 502.619 31.992L480.002 9.374C467.505 -3.124 447.242 -3.125 434.745 9.374L372.682 71.439L342.62 41.377C333.464 32.237 319.745 29.534 307.745 34.44C295.776 39.393 287.995 51.065 287.995 64.002V200.001C287.995 213.255 298.74 224 311.995 224Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M204.254 25.063C192.285 20.094 178.535 22.844 169.379 32L139.316 62.063L77.252 0C64.754 -12.5 44.492 -12.5 31.996 0L9.369 22.625C-3.123 35.121 -3.123 55.379 9.371 67.875L71.441 129.937L41.379 160C35.254 166.125 32.004 174.313 32.004 182.625C32.004 186.75 32.801 190.906 34.441 194.875C39.394 206.844 51.066 214.625 64.004 214.625H200.004C213.258 214.625 224.004 203.883 224.004 190.625V54.625C224.004 41.687 216.207 30 204.254 25.063ZM502.627 425.375L440.564 363.313L470.627 333.25C479.767 324.094 482.47 310.375 477.564 298.375C472.611 286.406 460.939 278.625 448.002 278.625H312.004C298.748 278.625 288.004 289.367 288.004 302.625V438.625C288.004 451.563 295.801 463.25 307.754 468.187C319.72 473.156 333.47 470.406 342.627 461.25L372.689 431.187L434.752 493.25C447.25 505.746 467.511 505.75 480.01 493.25L502.627 470.633C515.125 458.133 515.125 437.875 502.627 425.375Z" })
    ]
  }
));
MinimizeDuotone.displayName = "MinimizeDuotone";
var Minimize_default = MinimizeDuotone;
