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
var Carrot_exports = {};
__export(Carrot_exports, {
  default: () => Carrot_default
});
module.exports = __toCommonJS(Carrot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CarrotRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M369.651 142.285C392.397 94.773 380.649 38.384 334.283 0C289.791 36.884 277.668 90.022 296.915 136.158C282.917 131.282 268.67 128.031 254.423 128.031C206.432 128.031 160.315 154.788 137.819 200.799L2.344 478.367C-0.655 484.618 -0.905 492.245 2.344 498.872C6.468 507.249 14.717 512 23.34 512C26.715 512 30.214 511.25 33.713 509.624L311.162 374.091C336.158 361.838 357.654 341.458 370.776 314.452C386.523 282.319 387.648 246.81 376.9 215.553C422.767 234.307 475.257 221.804 512 177.668C473.382 131.282 417.143 119.529 369.651 142.285ZM327.659 293.447C319.536 309.951 306.663 322.954 290.166 330.956L232.802 358.963L208.931 335.082C199.558 325.705 184.311 325.705 175.062 335.082C165.689 344.459 165.689 359.713 175.062 368.965L187.185 381.218L76.83 435.231L172.938 238.308L206.931 273.067C211.681 277.818 217.679 280.068 223.928 280.068C230.177 280.068 236.176 277.818 240.925 273.067C250.298 263.689 250.298 248.436 240.925 239.183L199.308 198.298C214.18 184.545 233.302 176.168 254.423 176.168C266.795 176.168 278.793 178.919 290.166 184.42C309.662 194.047 324.41 210.676 331.533 231.306C338.532 251.811 337.157 273.942 327.659 293.447Z" })
  }
));
CarrotRegular.displayName = "CarrotRegular";
var Carrot_default = CarrotRegular;
