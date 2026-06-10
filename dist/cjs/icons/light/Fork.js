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
var Fork_exports = {};
__export(Fork_exports, {
  default: () => Fork_default
});
module.exports = __toCommonJS(Fork_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ForkLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504.112 126.125C496.503 121.641 486.691 124.172 482.206 131.812L424.612 229.797C407.425 256.359 379.597 273.531 348.441 276.875C331.441 278.547 309.534 275.844 293.956 270.203L284.191 266.672L82.378 476.187C80.144 478.516 76.862 479.953 73.456 480C70.269 480 67.128 478.703 64.847 476.406L35.55 447.078C33.284 444.828 31.956 441.547 32.003 438.344C32.05 435.078 33.472 431.797 35.878 429.516L245.659 228.094L242.128 218.328C236.394 202.422 233.722 180.547 235.472 163.891C238.784 132.562 256.112 104.594 282.441 87.562L381.066 29.812C388.691 25.344 391.253 15.547 386.8 7.922C382.316 0.266 372.503 -2.266 364.909 2.188L265.675 60.312C230.581 83.016 207.972 119.547 203.659 160.547C201.769 178.516 203.784 200.437 208.862 219.062L13.769 406.375C5.191 414.547 0.175 426.016 0.003 437.906C-0.138 449.812 4.597 461.422 12.956 469.734L42.206 499.016C50.425 507.266 61.816 512 74.144 512C85.941 511.797 97.362 506.812 105.472 498.344L293.191 303.469C311.534 308.437 333.487 310.5 351.691 308.703C392.659 304.312 429.019 281.891 451.847 246.594L509.8 148.031C514.269 140.422 511.737 130.609 504.112 126.125ZM308.691 155.312C311.816 158.438 315.909 160 320.003 160S328.191 158.438 331.316 155.312L427.316 59.312C433.566 53.062 433.566 42.937 427.316 36.688S410.941 30.438 404.691 36.688L308.691 132.688C302.441 138.938 302.441 149.062 308.691 155.312ZM356.691 203.312C359.816 206.438 363.909 208 368.003 208S376.191 206.438 379.316 203.312L475.316 107.312C481.566 101.062 481.566 90.937 475.316 84.688S458.941 78.438 452.691 84.688L356.691 180.688C350.441 186.938 350.441 197.062 356.691 203.312Z" })
  }
));
ForkLight.displayName = "ForkLight";
var Fork_default = ForkLight;
