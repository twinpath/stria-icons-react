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
var Mountain_exports = {};
__export(Mountain_exports, {
  default: () => Mountain_default
});
module.exports = __toCommonJS(Mountain_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MountainThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M503.193 393.783L280.074 44.246C274.865 36.082 265.433 32 256.002 32C246.568 32 237.136 36.082 231.927 44.246L8.806 393.783C-2.307 411.193 -2.946 433.207 7.14 451.234C17.072 468.973 35.921 480 56.314 480H455.685C476.078 480 494.929 468.973 504.861 451.234C514.945 433.193 514.306 411.18 503.193 393.783ZM245.416 52.852C247.699 49.275 252.38 48 256.002 48C259.621 48 264.304 49.275 266.587 52.855L365.621 208H256C253.484 208 251.109 209.188 249.593 211.203L209.031 265.281L184.234 220.141C182.828 217.594 180.14 216 177.218 216H141.273L245.416 52.852ZM490.9 443.418C483.793 456.113 470.298 464 455.685 464H56.314C41.703 464 28.21 456.113 21.103 443.422C13.9 430.547 14.357 414.826 22.293 402.393L131.06 232H172.484L200.984 283.859C202.296 286.234 204.718 287.781 207.437 287.984C207.625 288 207.812 288 208 288C210.5 288 212.89 286.828 214.406 284.797L260 224H375.796V223.941L489.71 402.396C497.644 414.818 498.099 430.541 490.9 443.418Z" })
  }
));
MountainThin.displayName = "MountainThin";
var Mountain_default = MountainThin;
