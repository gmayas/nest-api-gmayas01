import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto'
import { ProductService } from './product.service';


@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}
   
    //Defining product routes
    @Post('/create')
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
      const product = await this.productService.createProdcut(createProductDTO);
      return res.status(HttpStatus.OK).json({
           message: 'successfully created',
           product
       })
    }

    @Get ('/')
    async getPoroducts(@Res() res){
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({
            message: 'satisfactory inquiry',
            products
        })

    } 
    @Get ('/:productID')
    async getPoroduct(@Res() res, @Param('productID') productID){
        const product = await this.productService.getProduct(productID);
        if (!product) throw new NotFoundException('unsatisfactory query');
        return res.status(HttpStatus.OK).json({
            message: 'satisfactory inquiry',
            product
        })
    }
    
    @Delete('/delete')
    async deleteProductByQuery(@Res() res, @Query('productID') productID){
        const product = await this.productService.deleteProduct(productID);
        if (!product) throw new NotFoundException('unsatisfactory removal');
        return res.status(HttpStatus.OK).json({
            message: 'successfully removed',
            product
        })
    }

    @Delete('/delete/:productID')
    async deleteProductByID(@Res() res, @Param('productID') productID){
        const product = await this.productService.deleteProduct(productID);
        if (!product) throw new NotFoundException('unsatisfactory removal');
        return res.status(HttpStatus.OK).json({
            message: 'successfully removed',
            product
        })
    } 

    @Put('/update/:productID')
    async updateProductByID(@Res() res, @Param('productID') productID,  @Body() createProductDTO: CreateProductDTO){
        const product = await this.productService.updateProduct(productID, createProductDTO);
        if (!product) throw new NotFoundException('unsatisfactory update');
        return res.status(HttpStatus.OK).json({
            message: 'update successfully',
            product
        })
    } 

}
