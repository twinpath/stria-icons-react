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
var Racquet_exports = {};
__export(Racquet_exports, {
  default: () => Racquet_default
});
module.exports = __toCommonJS(Racquet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RacquetSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11.878 420.438C-0.908 429.576 -3.777 447.35 5.254 459.922L33.719 499.984C42.785 512.867 60.572 515.697 72.934 506.984L184.699 431.412L122.143 343.178L11.878 420.438ZM615.505 59.781C560.261 -18.094 432.65 -19.094 332.161 52.156C274.792 92.781 237.546 148.531 225.298 203.281C214.299 252.781 190.302 297.781 157.68 335.906L203.3 400.406C290.79 366.781 347.659 381.781 375.281 381.781C424.776 381.781 479.645 364.656 528.764 329.781C630.878 257.406 669.749 136.531 615.505 59.781ZM569.76 176.781C545.887 251.156 458.897 317.906 374.781 317.906C304.289 317.906 269.668 271.281 290.915 205.156C307.289 154.031 379.531 64.031 485.894 64.031C556.511 64.031 591.132 110.781 569.76 176.781Z" })
  }
));
RacquetSolid.displayName = "RacquetSolid";
var Racquet_default = RacquetSolid;
