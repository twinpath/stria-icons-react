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
const CircleDownRightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 496C388.549 496 496 388.547 496 256S388.549 16 256 16S16 123.453 16 256S123.451 496 256 496ZM256 32C379.514 32 480 132.484 480 256S379.514 480 256 480S32 379.516 32 256S132.486 32 256 32ZM227.551 295.434L195.955 327.031C180.834 342.148 191.543 368 212.926 368H344C350.627 368 356.627 365.312 360.971 360.969S367.998 350.629 368 344V212.926C368 191.547 342.148 180.836 327.029 195.953L295.434 227.551L221.895 154.012C212.521 144.641 197.324 144.641 187.953 154.012L154.012 187.953C144.641 197.328 144.639 212.523 154.012 221.895L227.551 295.434ZM165.326 199.266L199.268 165.328C202.387 162.207 207.461 162.207 210.58 165.328L295.434 250.18L338.344 207.27C341.754 203.859 345.576 204.918 347.062 205.531C348.547 206.148 351.998 208.102 351.998 212.926V344C351.998 346.883 350.533 348.781 349.656 349.656C348.781 350.531 346.883 352 344 352H212.926C208.1 352 206.15 348.547 205.533 347.062C204.918 345.578 203.857 341.754 207.268 338.344L250.178 295.434L165.326 210.578C162.205 207.461 162.205 202.387 165.326 199.266Z" })
  }
));
CircleDownRightThin.displayName = "CircleDownRightThin";
var CircleDownRight_default = CircleDownRightThin;
