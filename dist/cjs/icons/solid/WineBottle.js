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
var WineBottle_exports = {};
__export(WineBottle_exports, {
  default: () => WineBottle_default
});
module.exports = __toCommonJS(WineBottle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WineBottleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M507.296 72.57L439.416 4.688C433.164 -1.562 423.039 -1.562 416.789 4.688L394.16 27.312C387.91 33.566 387.91 43.691 394.16 49.945L317.529 126.578C270.9 106.824 215.144 115.828 177.14 153.828L18.751 312.227C-6.25 337.227 -6.25 377.734 18.751 402.734L109.259 493.25C134.261 518.25 174.765 518.25 199.767 493.25L358.158 334.852C396.162 296.848 405.162 241.094 385.41 194.461L462.042 117.828C468.292 124.078 478.542 124.078 484.794 117.828L507.421 95.199C513.546 88.945 513.546 78.82 507.296 72.57ZM179.265 423.238L88.757 332.727L210.769 210.711L301.277 301.227L179.265 423.238Z" })
  }
));
WineBottleSolid.displayName = "WineBottleSolid";
var WineBottle_default = WineBottleSolid;
