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
var DollarSign_exports = {};
__export(DollarSign_exports, {
  default: () => DollarSign_default
});
module.exports = __toCommonJS(DollarSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DollarSignRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M302.099 357.828C292.763 405.73 248.315 434.867 184.161 439.172V488C184.161 501.25 173.411 512 160.161 512S136.161 501.25 136.161 488V437.77C132.745 437.404 129.649 437.531 126.161 437.047C99.13 433.438 70.224 424.172 44.724 416L32.849 412.219C20.224 408.234 13.192 394.766 17.161 382.109C21.161 369.484 34.474 362.391 47.286 366.437L59.349 370.281C82.974 377.844 109.724 386.422 132.661 389.5C188.099 397.187 247.411 387.562 254.974 348.641C261.942 312.953 235.88 300 154.099 279.188L138.067 275.078C90.317 262.625 1.442 239.422 18.036 154.172C27.37 106.23 71.917 77.152 136.161 72.879V24C136.161 10.75 146.911 0 160.161 0S184.161 10.75 184.161 24V74.127C187.485 74.484 190.581 74.482 193.974 74.953C211.411 77.375 231.474 82.172 257.13 90.063C269.786 93.953 276.911 107.391 273.005 120.047C269.13 132.719 255.755 139.844 243.005 135.938C219.88 128.828 202.192 124.547 187.349 122.484C132.067 114.828 72.724 124.438 65.161 163.359C59.036 194.781 78.911 210.031 150.192 228.641L165.942 232.672C230.474 249.094 318.88 271.578 302.099 357.828Z" })
  }
));
DollarSignRegular.displayName = "DollarSignRegular";
var DollarSign_default = DollarSignRegular;
