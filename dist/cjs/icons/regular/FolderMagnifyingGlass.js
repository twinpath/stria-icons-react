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
var FolderMagnifyingGlass_exports = {};
__export(FolderMagnifyingGlass_exports, {
  default: () => FolderMagnifyingGlass_default
});
module.exports = __toCommonJS(FolderMagnifyingGlass_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FolderMagnifyingGlassRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 96H307.883L258.746 50.746C246.742 38.742 230.465 32 213.49 32H96C60.654 32 32 60.656 32 96V416C32 451.344 60.654 480 96 480H480C515.346 480 544 451.344 544 416V160C544 124.656 515.346 96 480 96ZM496 416C496 424.824 488.822 432 480 432H96C87.178 432 80 424.824 80 416V96C80 87.176 87.178 80 96 80H213.49C217.764 80 221.783 81.664 224.805 84.688L288 144H480C488.822 144 496 151.176 496 160V416ZM354.422 320.484C362.84 306.211 368 289.773 368 272C368 218.98 325.02 176 272 176S176 218.98 176 272S218.98 368 272 368C289.773 368 306.209 362.84 320.484 354.422L367.031 400.969C371.719 405.656 377.844 408 384 408S396.281 405.656 400.969 400.969C410.344 391.594 410.344 376.406 400.969 367.031L354.422 320.484ZM272 320C245.533 320 224 298.469 224 272S245.533 224 272 224S320 245.531 320 272S298.467 320 272 320Z" })
  }
));
FolderMagnifyingGlassRegular.displayName = "FolderMagnifyingGlassRegular";
var FolderMagnifyingGlass_default = FolderMagnifyingGlassRegular;
