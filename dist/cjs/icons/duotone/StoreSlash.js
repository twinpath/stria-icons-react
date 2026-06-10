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
var StoreSlash_exports = {};
__export(StoreSlash_exports, {
  default: () => StoreSlash_default
});
module.exports = __toCommonJS(StoreSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StoreSlashDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M159.415 384.002V250.483C147.991 254.043 136.034 256.004 123.858 256.004C118.409 256.004 112.96 255.639 107.505 254.924C103.333 254.363 99.524 252.764 95.509 251.723V464.001C95.509 490.51 116.999 512 143.508 512H495.601C504.706 512 513.126 509.322 520.38 504.92L366.103 384.002H159.415ZM123.858 224.004C134.725 224.004 144.881 221.645 154.411 218.083L48.792 135.303C43.136 175.648 68.157 217.344 111.77 223.211C115.745 223.731 119.801 224.004 123.858 224.004ZM514.958 256.004C502.831 256.004 490.907 254.051 479.507 250.5V350.899L543.601 401.133V251.658C539.454 252.74 535.513 254.367 531.196 254.939C525.858 255.639 520.519 256.004 514.958 256.004ZM579.157 103.813L521.831 13.137C516.726 4.986 507.616 0.008 497.902 0.008H141.083C131.366 0.008 122.258 4.986 117.153 13.137L94.426 49.081L300.469 210.571C307.51 206.257 313.939 201.089 319.408 195.036C335.306 212.626 358.519 224.004 384.574 224.004C410.74 224.004 433.869 212.626 449.767 195.036C465.747 212.626 488.904 224.004 514.958 224.004C519.099 224.004 523.073 223.731 527.048 223.211C582.524 215.852 608.827 150.724 579.157 103.813Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M634.874 502.805C626.749 513.211 611.686 515.086 601.186 506.883L9.189 42.89C-1.249 34.718 -3.061 19.625 5.126 9.187C9.845 3.156 16.907 0 24.032 0C29.189 0 34.407 1.672 38.814 5.109L630.811 469.102C641.249 477.274 643.061 492.367 634.874 502.805Z" })
    ]
  }
));
StoreSlashDuotone.displayName = "StoreSlashDuotone";
var StoreSlash_default = StoreSlashDuotone;
