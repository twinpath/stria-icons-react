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
var Recycle_exports = {};
__export(Recycle_exports, {
  default: () => Recycle_default
});
module.exports = __toCommonJS(Recycle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RecycleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M378.643 111.102L337.431 45.138C299.853 -15.01 212.27 -15.042 174.648 45.078L167.274 56.861C157.953 71.757 162.504 91.587 177.387 100.928L177.387 100.928C192.357 110.322 212.11 105.79 221.486 90.808L228.897 78.966C241.646 58.582 270.896 59.333 283.145 78.966L324.394 145.115L378.643 111.102ZM128.01 384.08H96.026C70.882 384.08 55.552 356.422 68.877 335.099L119.775 253.655L65.526 219.768L14.686 301.321C-25.175 365.264 20.801 448.103 96.151 448.103H128.015C145.693 448.103 160.024 433.772 160.024 416.094V416.094C160.024 398.413 145.691 384.08 128.01 384.08ZM497.371 301.344L480.372 274.057C471.035 259.071 451.315 254.497 436.335 263.843L436.335 263.843C421.397 273.162 416.817 292.998 426.157 307.923L443.15 335.074C456.496 356.4 441.165 384.08 416.008 384.08H320.019V448.103H415.891C491.229 448.103 537.207 365.288 497.371 301.344Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M159.276 151.538C157.276 142.909 148.652 137.657 140.026 139.533L48.601 160.688C27.783 165.506 23.165 193.09 41.278 204.43L144.217 268.799C162.34 280.144 185.128 263.905 180.332 243.062L159.276 151.538ZM403.11 95.859L300.249 160.154C282.089 171.468 286.685 199.102 307.526 203.924L398.931 225.074C407.553 227.069 416.158 221.689 418.144 213.061L439.18 121.623C443.969 100.806 421.235 84.569 403.11 95.859ZM279.18 338.324L212.773 404.758C206.649 410.885 206.649 421.138 212.773 427.392L279.193 493.734C294.316 508.838 320.145 498.124 320.145 476.745V355.3C320.145 333.912 294.297 323.202 279.18 338.324Z" })
    ]
  }
));
RecycleDuotone.displayName = "RecycleDuotone";
var Recycle_default = RecycleDuotone;
