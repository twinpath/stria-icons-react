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
var CircleDownRight_exports = {};
__export(CircleDownRight_exports, {
  default: () => CircleDownRight_default
});
module.exports = __toCommonJS(CircleDownRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleDownRightLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M329.539 369.535C350.929 369.535 369.546 351.205 369.524 329.263L367.193 196.117C367.181 179.887 357.492 165.38 342.51 159.148C327.506 152.939 310.403 156.342 298.913 167.833L278.627 188.118L227.716 137.206C212.115 121.606 186.748 121.606 171.147 137.206L137.206 171.147C121.606 186.748 121.606 212.115 137.206 227.716L188.118 278.627L167.833 298.913C156.342 310.403 152.939 327.506 159.148 342.51C165.347 357.459 179.787 367.126 195.951 367.204L329.539 369.535ZM190.46 321.54L233.373 278.627L159.833 205.088C156.718 201.973 156.718 196.89 159.833 193.775L193.775 159.833C196.89 156.718 201.973 156.718 205.088 159.833L278.627 233.373L321.54 190.46C326.075 185.925 335.189 188.191 335.207 196.393L337.538 329.539C337.569 335.456 332.068 337.551 329.815 337.549L196.393 335.207L196.117 335.196C189.256 335.196 185.204 326.796 190.46 321.54ZM496 256C496 123.451 388.549 16 256 16S16 123.451 16 256S123.451 496 256 496S496 388.549 496 256ZM48 256C48 141.309 141.309 48 256 48S464 141.309 464 256S370.691 464 256 464S48 370.691 48 256Z" })
  }
));
CircleDownRightLight.displayName = "CircleDownRightLight";
var CircleDownRight_default = CircleDownRightLight;
