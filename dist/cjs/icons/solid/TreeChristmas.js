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
var TreeChristmas_exports = {};
__export(TreeChristmas_exports, {
  default: () => TreeChristmas_default
});
module.exports = __toCommonJS(TreeChristmas_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TreeChristmasSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M471.637 455.625L381.769 352H417.766C443.389 352 457.264 322.75 441.014 303.5L306.201 142.549L292.742 169.34C285.721 183.316 271.641 192 256 192C240.357 192 226.279 183.316 219.256 169.338L204.762 140.486L71.045 303.5C54.795 322.75 68.67 352 94.293 352H130.289L40.422 455.625C21.424 477.5 36.672 512 65.17 512H446.764C475.387 512 490.51 477.375 471.637 455.625ZM192 312C178.752 312 168.002 301.25 168.002 288S178.752 264 192 264C205.248 264 215.998 274.75 215.998 288S205.248 312 192 312ZM320 440C306.752 440 296.002 429.25 296.002 416S306.752 392 320 392S343.998 402.75 343.998 416S333.248 440 320 440ZM181.025 88.148L225.506 110.494L247.852 154.975C249.533 158.324 252.768 160 256 160S262.465 158.324 264.148 154.975L286.494 110.494L330.975 88.148C337.674 84.783 337.674 75.217 330.975 71.85L286.494 49.506L264.148 5.025C260.781 -1.676 251.217 -1.676 247.852 5.025L225.506 49.506L181.025 71.85C174.324 75.217 174.324 84.783 181.025 88.148Z" })
  }
));
TreeChristmasSolid.displayName = "TreeChristmasSolid";
var TreeChristmas_default = TreeChristmasSolid;
