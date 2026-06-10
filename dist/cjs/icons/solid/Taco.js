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
var Taco_exports = {};
__export(Taco_exports, {
  default: () => Taco_default
});
module.exports = __toCommonJS(Taco_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TacoSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M255.971 191.996C125.833 191.996 18.071 299.372 0.319 439.124C-2.431 460.625 12.946 480 32.448 480H479.495C498.997 480 514.499 460.625 511.624 439.124C493.872 299.372 386.11 191.996 255.971 191.996ZM112 416C103.125 416 96 408.875 96 400S103.125 384 112 384C120.875 384 128 391.125 128 400S120.875 416 112 416ZM176 352C167.125 352 160 344.875 160 336S167.125 320 176 320S192 327.125 192 336S184.875 352 176 352ZM7.32 279.497C9.82 288.622 11.321 298.122 11.821 307.623C63.951 218.496 154.836 159.995 255.971 159.995S447.992 218.496 500.122 307.623C500.622 298.122 502.123 288.747 504.623 279.497C504.623 279.497 504.748 279.372 504.748 279.247C509.873 261.997 515.749 242.372 508.873 224.246C501.748 205.246 484.121 194.871 468.619 185.871C459.118 180.246 449.242 174.496 444.866 168.246C440.116 161.62 437.491 149.745 434.99 138.245C431.115 120.245 426.615 99.745 411.363 87.619C395.736 75.244 375.359 76.619 357.357 77.869C346.606 78.619 335.355 79.369 328.229 76.744C321.228 74.244 313.103 66.619 305.227 59.244C276.224 32.119 254.596 14.743 206.841 59.244C198.965 66.494 190.715 74.244 183.839 76.744C176.588 79.244 165.462 78.494 154.586 77.744C136.584 76.494 116.332 75.119 100.58 87.619C85.453 99.62 80.953 120.12 76.952 138.245C74.452 149.745 71.952 161.495 67.201 168.246C62.826 174.496 52.95 180.246 43.449 185.746C27.947 194.871 10.32 205.121 3.195 224.246C-3.681 242.372 2.195 261.997 7.32 279.247C7.195 279.247 7.195 279.372 7.32 279.497Z" })
  }
));
TacoSolid.displayName = "TacoSolid";
var Taco_default = TacoSolid;
