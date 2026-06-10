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
var CircleDownLeft_exports = {};
__export(CircleDownLeft_exports, {
  default: () => CircleDownLeft_default
});
module.exports = __toCommonJS(CircleDownLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleDownLeftLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M316.049 367.204C332.213 367.126 346.653 357.459 352.852 342.51C359.061 327.506 355.658 310.403 344.167 298.913L323.882 278.627L374.794 227.716C390.394 212.115 390.394 186.748 374.794 171.147L340.853 137.206C325.252 121.606 299.885 121.606 284.284 137.206L233.373 188.118L213.087 167.833C201.597 156.342 184.494 152.939 169.49 159.148C154.508 165.38 144.819 179.887 144.807 196.117L142.476 329.263C142.454 351.205 161.071 369.535 182.461 369.535L316.049 367.204ZM315.883 335.196L315.607 335.207L182.185 337.549C179.932 337.551 174.431 335.456 174.462 329.539L176.793 196.393C176.811 188.191 185.925 185.925 190.46 190.46L233.373 233.373L306.912 159.833C310.027 156.718 315.11 156.718 318.225 159.833L352.167 193.775C355.282 196.89 355.282 201.973 352.167 205.088L278.627 278.627L321.54 321.54C326.796 326.796 322.744 335.196 315.883 335.196ZM256 496C388.549 496 496 388.549 496 256S388.549 16 256 16S16 123.451 16 256S123.451 496 256 496ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464Z" })
  }
));
CircleDownLeftLight.displayName = "CircleDownLeftLight";
var CircleDownLeft_default = CircleDownLeftLight;
