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
var DiagramLeanCanvas_exports = {};
__export(DiagramLeanCanvas_exports, {
  default: () => DiagramLeanCanvas_default
});
module.exports = __toCommonJS(DiagramLeanCanvas_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiagramLeanCanvasDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 320H128V96H64V320ZM512 96V320H576V96H512Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 32H64C28.652 32 0 60.654 0 96V416C0 451.346 28.652 480 64 480H576C611.348 480 640 451.346 640 416V96C640 60.654 611.348 32 576 32ZM576 96V320H512V96H576ZM400 232H464V320H400V232ZM464 96V184H400V96H464ZM352 96V320H288V96H352ZM176 232H240V320H176V232ZM240 96V184H176V96H240ZM128 96V320H64V96H128ZM64 416V368H296V416H64ZM344 416V368H576V416H344Z" })
    ]
  }
));
DiagramLeanCanvasDuotone.displayName = "DiagramLeanCanvasDuotone";
var DiagramLeanCanvas_default = DiagramLeanCanvasDuotone;
