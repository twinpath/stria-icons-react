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
var SquareDownLeft_exports = {};
__export(SquareDownLeft_exports, {
  default: () => SquareDownLeft_default
});
module.exports = __toCommonJS(SquareDownLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareDownLeftLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480ZM64 448C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416C416 433.645 401.645 448 384 448H64ZM284.049 367.204C300.213 367.126 314.653 357.459 320.852 342.51C327.061 327.506 323.658 310.403 312.167 298.913L291.882 278.627L342.794 227.716C358.394 212.115 358.394 186.748 342.794 171.147L308.853 137.206C293.252 121.606 267.885 121.606 252.284 137.206L201.373 188.118L181.087 167.833C169.597 156.342 152.494 152.939 137.49 159.148C122.508 165.38 112.819 179.887 112.807 196.117L110.476 329.263C110.454 351.205 129.071 369.535 150.461 369.535L284.049 367.204ZM283.883 335.196L283.607 335.207L150.185 337.549C147.932 337.549 142.431 335.455 142.462 329.539L144.793 196.393C144.811 188.192 153.925 185.925 158.46 190.46L201.373 233.373L274.912 159.833C278.027 156.718 283.11 156.718 286.225 159.833L320.167 193.775C323.282 196.89 323.282 201.973 320.167 205.088L246.627 278.627L289.54 321.54C294.796 326.796 290.743 335.196 283.883 335.196Z" })
  }
));
SquareDownLeftLight.displayName = "SquareDownLeftLight";
var SquareDownLeft_default = SquareDownLeftLight;
