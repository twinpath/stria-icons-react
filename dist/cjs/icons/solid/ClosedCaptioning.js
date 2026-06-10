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
var ClosedCaptioning_exports = {};
__export(ClosedCaptioning_exports, {
  default: () => ClosedCaptioning_default
});
module.exports = __toCommonJS(ClosedCaptioning_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClosedCaptioningSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H512C547.346 480 576 451.346 576 416V96C576 60.652 547.346 32 512 32ZM168.609 289.938C187.297 308.656 217.797 308.656 236.484 289.938C245.859 280.562 261.047 280.562 270.422 289.938S279.797 314.5 270.422 323.875C251.703 342.594 227.141 351.953 202.547 351.953S153.391 342.594 134.672 323.875C116.547 305.75 106.547 281.641 106.547 256S116.547 206.25 134.672 188.125C172.109 150.686 232.984 150.686 270.422 188.125C279.797 197.5 279.797 212.687 270.422 222.062S245.859 231.438 236.484 222.062C217.797 203.344 187.297 203.344 168.609 222.062C159.547 231.125 154.547 243.188 154.547 256S159.547 280.875 168.609 289.938ZM360.609 289.938C379.297 308.656 409.797 308.656 428.484 289.938C437.859 280.562 453.047 280.562 462.422 289.938S471.797 314.5 462.422 323.875C443.703 342.594 419.141 351.953 394.547 351.953S345.391 342.594 326.672 323.875C308.547 305.75 298.547 281.641 298.547 256S308.547 206.25 326.672 188.125C364.109 150.686 424.984 150.686 462.422 188.125C471.797 197.5 471.797 212.687 462.422 222.062S437.859 231.438 428.484 222.062C409.797 203.344 379.297 203.344 360.609 222.062C351.547 231.125 346.547 243.188 346.547 256S351.547 280.875 360.609 289.938Z" })
  }
));
ClosedCaptioningSolid.displayName = "ClosedCaptioningSolid";
var ClosedCaptioning_default = ClosedCaptioningSolid;
