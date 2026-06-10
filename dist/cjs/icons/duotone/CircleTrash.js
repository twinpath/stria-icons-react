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
var CircleTrash_exports = {};
__export(CircleTrash_exports, {
  default: () => CircleTrash_default
});
module.exports = __toCommonJS(CircleTrash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleTrashDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM341.406 361.5C340.625 373.922 329.891 384 317.453 384H194.547C182.109 384 171.375 373.922 170.594 361.5L160 192H352L341.406 361.5ZM352 160H160C151.164 160 144 152.836 144 144C144 135.162 151.164 128 160 128H208L213.789 116.422C215.145 113.711 217.914 112 220.943 112H291.057C294.086 112 296.857 113.711 298.211 116.422L304 128H352C360.838 128 368 135.162 368 144C368 152.836 360.838 160 352 160Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M170.594 361.5C171.375 373.922 182.109 384 194.547 384H317.453C329.891 384 340.625 373.922 341.406 361.5L352 192H160L170.594 361.5ZM352 128H304L298.211 116.422C296.857 113.711 294.086 112 291.057 112H220.943C217.914 112 215.145 113.711 213.789 116.422L208 128H160C151.164 128 144 135.162 144 144C144 152.836 151.164 160 160 160H352C360.838 160 368 152.836 368 144C368 135.162 360.838 128 352 128Z" })
    ]
  }
));
CircleTrashDuotone.displayName = "CircleTrashDuotone";
var CircleTrash_default = CircleTrashDuotone;
