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
var FolderHeart_exports = {};
__export(FolderHeart_exports, {
  default: () => FolderHeart_default
});
module.exports = __toCommonJS(FolderHeart_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FolderHeartDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 96H272L208 32H48C21.5 32 0 53.5 0 80V432C0 458.5 21.5 480 48 480H464C490.5 480 512 458.5 512 432V144C512 117.5 490.5 96 464 96ZM348.668 294.314L265.676 379.873C260.289 385.377 251.723 385.377 246.336 379.873L163.344 294.314C139.234 269.299 140.703 228.143 167.629 205.127C191.133 185.111 226.016 188.74 247.438 210.881L255.883 219.635L264.328 210.881C285.875 188.74 320.883 185.111 344.258 205.127C371.312 228.143 372.781 269.299 348.668 294.314Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M348.381 294.314L265.388 379.873C260.002 385.377 251.435 385.377 246.049 379.873L163.056 294.314C138.947 269.299 140.416 228.143 167.342 205.127C190.845 185.111 225.728 188.74 247.15 210.881L255.595 219.635L264.041 210.881C285.588 188.74 320.595 185.111 343.97 205.127C371.025 228.143 372.494 269.299 348.381 294.314Z" })
    ]
  }
));
FolderHeartDuotone.displayName = "FolderHeartDuotone";
var FolderHeart_default = FolderHeartDuotone;
