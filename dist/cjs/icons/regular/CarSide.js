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
var CarSide_exports = {};
__export(CarSide_exports, {
  default: () => CarSide_default
});
module.exports = __toCommonJS(CarSide_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CarSideRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M520 224L411.301 88.062C399.141 72.854 380.725 64 361.25 64H155.375C129.125 64 105.625 79.875 95.875 104.25L48 226.25C20.5 233.375 0 258.25 0 288V400C0 417.674 14.328 432 32 432H65.613C73.266 477.363 112.461 512 160 512S246.734 477.363 254.387 432H385.613C393.266 477.363 432.461 512 480 512S566.734 477.363 574.387 432H608C625.674 432 640 417.674 640 400V344C640 277.727 586.275 224 520 224ZM272 112H361.25C366.164 112 370.742 114.201 373.812 118.039L458.541 224H272V112ZM140.441 122.076C142.891 115.955 148.752 112 155.375 112H224V224H100.447L140.441 122.076ZM160 464C133.49 464 112 442.51 112 416S133.49 368 160 368S208 389.49 208 416S186.51 464 160 464ZM480 464C453.49 464 432 442.51 432 416S453.49 368 480 368S528 389.49 528 416S506.51 464 480 464ZM592 384H570.121C556.896 346.799 521.738 320 480 320S403.104 346.799 389.879 384H250.121C236.896 346.799 201.738 320 160 320S83.104 346.799 69.879 384H48V288C48 279.162 55.164 272 64 272H520C559.764 272 592 304.234 592 344V384Z" })
  }
));
CarSideRegular.displayName = "CarSideRegular";
var CarSide_default = CarSideRegular;
