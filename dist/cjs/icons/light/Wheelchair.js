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
var Wheelchair_exports = {};
__export(Wheelchair_exports, {
  default: () => Wheelchair_default
});
module.exports = __toCommonJS(Wheelchair_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WheelchairLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 112C206.875 112 232 86.875 232 56S206.875 0 176 0S120 25.125 120 56S145.125 112 176 112ZM176 32C189.234 32 200 42.766 200 56S189.234 80 176 80S152 69.234 152 56S162.766 32 176 32ZM511.514 428.125C509.373 419.547 500.67 414.297 492.123 416.484L441.154 429.219L382.623 297.5C380.045 291.719 374.326 288 367.998 288H236.828L222.611 224H335.998C344.842 224 351.998 216.844 351.998 208S344.842 192 335.998 192H215.504L207.625 156.531C205.719 147.906 197.172 142.531 188.531 144.375C179.906 146.297 174.469 154.844 176.375 163.469L208.375 307.469C210 314.797 216.5 320 224 320H357.607L417.373 454.5C419.998 460.375 425.795 464 431.998 464C433.279 464 434.576 463.844 435.873 463.516L499.873 447.516C508.451 445.375 513.67 436.688 511.514 428.125ZM303.982 368.391C295.217 366.406 286.779 371.844 284.826 380.453C271.529 439.062 220.188 480 160 480C89.422 480 32 422.578 32 352C32 291.812 72.938 240.469 131.547 227.172C140.156 225.203 145.562 216.641 143.609 208.016C141.641 199.391 133.047 193.953 124.453 195.953C51.172 212.594 0 276.766 0 352C0 440.219 71.781 512 160 512C235.234 512 299.404 460.828 316.045 387.547C317.998 378.922 312.592 370.359 303.982 368.391Z" })
  }
));
WheelchairLight.displayName = "WheelchairLight";
var Wheelchair_default = WheelchairLight;
